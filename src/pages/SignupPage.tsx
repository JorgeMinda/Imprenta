import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from 'wasp/client/auth';
import { Layout } from '../components/Layout';

export const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signup({ username, password });
      window.location.href = '/';
    } catch (err: any) {
      setError(err?.message || 'Error al registrar usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout currentPage="signup">
      <div style={{ maxWidth: '400px', margin: '3rem auto', padding: '2rem', backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginTop: 0, color: '#1f2937', textAlign: 'center' }}>Crear Cuenta</h2>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
          Motor Contable SRI (Ecuador)
        </p>
        {error && (
          <div style={{ marginBottom: '1rem', padding: '0.75rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '6px', color: '#dc2626', fontSize: '0.85rem' }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500, color: '#374151', fontSize: '0.85rem' }}>
              Usuario
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="usuario"
              style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
              required
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 500, color: '#374151', fontSize: '0.85rem' }}>
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              minLength={8}
              style={{ width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db', borderRadius: '6px', fontSize: '0.9rem', boxSizing: 'border-box' }}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{ width: '100%', padding: '0.75rem', backgroundColor: loading ? '#86efac' : '#059669', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '0.95rem', cursor: loading ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
          </button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: '#6b7280' }}>
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" style={{ color: '#2563eb', textDecoration: 'none' }}>Inicia sesión</Link>
        </p>
      </div>
    </Layout>
  );
};
