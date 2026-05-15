import { useState } from 'react';

export default function LoginForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');

  const handleFirstStep = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const u = (form.elements.namedItem('username') as HTMLInputElement).value;
    const p = (form.elements.namedItem('password') as HTMLInputElement).value;
    if (!u || !p) return;

    setUsername(u);

    await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: u, step: '1' }),
    });

    setStep(2);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      username,
      nombre: (form.elements.namedItem('nombre') as HTMLInputElement).value,
      grupo: (form.elements.namedItem('grupo') as HTMLInputElement).value,
      carrera: (form.elements.namedItem('carrera') as HTMLInputElement).value,
      step: '2',
    };

    try {
      await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      window.location.href = '/alert';
    } catch {
      window.location.href = '/alert';
    }
  };

  return (
    <>
      <form onSubmit={handleFirstStep}>
        <div class="authmodel">
          <div class="usernameContainer">
            <input
              id="username"
              name="username"
              type="text"
              class="frm-input"
              placeholder="Usuario"
              required
            />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            class="frm-input"
            placeholder="Contraseña"
            required
          />
          <div class="button-group">
            <input type="submit" value="Ingresar" class="frm-button" />
          </div>
        </div>
      </form>

      {step === 2 && (
        <div class="modal-overlay">
          <div class="modal-content">
            <h2 style={{ textAlign: 'center', marginBottom: 24, color: '#333' }}>
              Verificación de identidad
            </h2>
            <p style={{ textAlign: 'center', marginBottom: 20, color: '#666', fontSize: 14 }}>
              Para completar el acceso, verifique sus datos académicos
            </p>
            <form onSubmit={handleFinalSubmit}>
              <input
                name="nombre"
                type="text"
                class="frm-input"
                placeholder="Nombre del estudiante"
                required
              />
              <input
                name="grupo"
                type="text"
                class="frm-input"
                placeholder="Grupo"
                required
              />
              <input
                name="carrera"
                type="text"
                class="frm-input"
                placeholder="Carrera"
                required
              />
              <div class="button-group">
                <button type="submit" class="frm-button" disabled={loading}>
                  {loading ? 'Verificando...' : 'Continuar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          background: white;
          border-radius: 10px;
          padding: 32px;
          max-width: 460px;
          width: 100%;
          position: relative;
          max-height: 90vh;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}
