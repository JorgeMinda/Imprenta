import React from 'react';
import { Layout } from './components/Layout';

const statsCardStyle: React.CSSProperties = {
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '1.5rem',
  backgroundColor: 'white',
};

const statsGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '1rem',
  marginBottom: '2rem',
};

export const Dashboard: React.FC = () => {
  return (
    <Layout currentPage="dashboard">
      <h2 style={{ marginTop: 0, color: '#1f2937' }}>Dashboard</h2>

      <div style={statsGridStyle}>
        <div style={statsCardStyle}>
          <p style={{ color: '#6b7280', margin: '0 0 0.5rem', fontSize: '0.85rem' }}>Total Cuentas</p>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#1d4ed8' }}>--</p>
        </div>
        <div style={statsCardStyle}>
          <p style={{ color: '#6b7280', margin: '0 0 0.5rem', fontSize: '0.85rem' }}>Asientos del Mes</p>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#059669' }}>--</p>
        </div>
        <div style={statsCardStyle}>
          <p style={{ color: '#6b7280', margin: '0 0 0.5rem', fontSize: '0.85rem' }}>Período Fiscal</p>
          <p style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#d97706' }}>Activo</p>
        </div>
        <div style={statsCardStyle}>
          <p style={{ color: '#6b7280', margin: '0 0 0.5rem', fontSize: '0.85rem' }}>Último Asiento</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, margin: 0, color: '#374151' }}>--</p>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
        <h3 style={{ marginTop: 0, color: '#374151' }}>Accesos Rápidos</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="/accounts"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Ver Cuentas Contables
          </a>
          <a
            href="/journal/new"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#059669',
              color: 'white',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            Crear Asiento Contable
          </a>
        </div>
      </div>

      <div style={{ marginTop: '2rem', backgroundColor: '#fefce8', border: '1px solid #fde68a', borderRadius: '8px', padding: '1rem 1.5rem' }}>
        <p style={{ margin: 0, color: '#92400e', fontSize: '0.9rem' }}>
          <strong>Motor Contable SRI (Ecuador)</strong> — Sistema de contabilidad bajo Normas Internacionales de Información Financiera (NIIF) adaptadas al SRI de Ecuador.
        </p>
      </div>
    </Layout>
  );
};
