import React from 'react';

const navStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  padding: '1rem 2rem',
  borderBottom: '2px solid #e5e7eb',
  backgroundColor: '#f9fafb',
};

const linkStyle: React.CSSProperties = {
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
};

const activeLinkStyle: React.CSSProperties = {
  ...linkStyle,
  color: '#1d4ed8',
  borderBottom: '2px solid #2563eb',
  paddingBottom: '0.25rem',
};

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh' }}>
      <header style={{ borderBottom: '2px solid #1d4ed8', backgroundColor: '#1e3a5f', color: 'white', padding: '1rem 2rem' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Motor Contable SRI</h1>
        <p style={{ margin: '0.25rem 0 0', opacity: 0.8, fontSize: '0.85rem' }}>Sistema de Contabilidad - Ecuador</p>
      </header>
      <nav style={navStyle}>
        <a href="/" style={currentPage === 'dashboard' ? activeLinkStyle : linkStyle}>
          Dashboard
        </a>
        <a href="/accounts" style={currentPage === 'accounts' ? activeLinkStyle : linkStyle}>
          Cuentas
        </a>
        <a href="/journal/new" style={currentPage === 'journal' ? activeLinkStyle : linkStyle}>
          Nuevo Asiento
        </a>
      </nav>
      <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </main>
    </div>
  );
};
