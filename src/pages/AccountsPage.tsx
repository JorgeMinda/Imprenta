import React from 'react';
import { Layout } from '../components/Layout';

interface Account {
  id: string;
  code: string;
  name: string;
  type: string;
  naturalSign: string;
  isDetail: boolean;
  active: boolean;
  parentId: string | null;
}

const typeColors: Record<string, string> = {
  ACTIVO: '#2563eb',
  PASIVO: '#dc2626',
  PATRIMONIO: '#7c3aed',
  INGRESO: '#059669',
  GASTO: '#d97706',
  COSTOS: '#ea580c',
};

const typeLabels: Record<string, string> = {
  ACTIVO: 'Activo',
  PASIVO: 'Pasivo',
  PATRIMONIO: 'Patrimonio',
  INGRESO: 'Ingreso',
  GASTO: 'Gasto',
  COSTOS: 'Costos',
};

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
};

const thStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  textAlign: 'left',
  backgroundColor: '#f9fafb',
  borderBottom: '2px solid #e5e7eb',
  fontWeight: 600,
  color: '#374151',
  fontSize: '0.85rem',
};

const tdStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderBottom: '1px solid #f3f4f6',
  color: '#1f2937',
};

const badgeStyle = (color: string): React.CSSProperties => ({
  display: 'inline-block',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'white',
  backgroundColor: color,
});

const mockAccounts: Account[] = [
  { id: '1', code: '1.1.01.01', name: 'Caja', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true, active: true, parentId: null },
  { id: '2', code: '1.1.01.02', name: 'Banco', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true, active: true, parentId: null },
  { id: '3', code: '1.1.02.01', name: 'Cuentas por Cobrar', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true, active: true, parentId: null },
  { id: '4', code: '2.1.01.01', name: 'Proveedores', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true, active: true, parentId: null },
  { id: '5', code: '2.1.02.01', name: 'Impuestos por Pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true, active: true, parentId: null },
  { id: '6', code: '3.1.01.01', name: 'Capital Social', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true, active: true, parentId: null },
  { id: '7', code: '4.1.01.01', name: 'Ingresos por Ventas', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true, active: true, parentId: null },
  { id: '8', code: '5.1.01.01', name: 'Gastos de Administración', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true, active: true, parentId: null },
  { id: '9', code: '6.1.01.01', name: 'Costo de Mercadería Vendida', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true, active: true, parentId: null },
];

export const AccountsPage: React.FC = () => {
  const accounts = mockAccounts;

  return (
    <Layout currentPage="accounts">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ margin: 0, color: '#1f2937' }}>Catálogo de Cuentas Contables</h2>
        <span style={{ color: '#6b7280', fontSize: '0.9rem' }}>{accounts.length} cuentas registradas</span>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Código</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Tipo</th>
            <th style={thStyle}>Saldo Natural</th>
            <th style={thStyle}>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id} style={{ cursor: 'pointer' }}>
              <td style={{ ...tdStyle, fontFamily: 'monospace', fontWeight: 600 }}>{account.code}</td>
              <td style={tdStyle}>{account.name}</td>
              <td style={tdStyle}>
                <span style={badgeStyle(typeColors[account.type] || '#6b7280')}>
                  {typeLabels[account.type] || account.type}
                </span>
              </td>
              <td style={tdStyle}>{account.naturalSign === 'DEUDORA' ? 'Débito' : 'Crédito'}</td>
              <td style={tdStyle}>{account.isDetail ? 'Sí' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
        <p style={{ margin: 0, color: '#166534', fontSize: '0.85rem' }}>
          <strong>Catálogo SRI:</strong> Las cuentas siguen la estructura del `Subcatálogo de Cuentas del Sector Público` del SRI de Ecuador.
          Código: `Grupo.Subgrupo.Cuenta.Subcuenta`
        </p>
      </div>
    </Layout>
  );
};
