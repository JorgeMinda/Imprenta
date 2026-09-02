import React, { useState } from 'react';
import { Layout } from '../components/Layout';

interface LineForm {
  accountId: string;
  debitCents: string;
  creditCents: string;
  description: string;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.5rem 0.75rem',
  border: '1px solid #d1d5db',
  borderRadius: '6px',
  fontSize: '0.9rem',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '0.25rem',
  fontWeight: 500,
  color: '#374151',
  fontSize: '0.85rem',
};

const sourceTypes = [
  { value: 'FACTURA_VENTA', label: 'Factura de Venta' },
  { value: 'FACTURA_COMPRA', label: 'Factura de Compra' },
  { value: 'RETENCION', label: 'Retención' },
  { value: 'NOTA_CREDITO', label: 'Nota de Crédito' },
  { value: 'NOTA_DEBITO', label: 'Nota de Débito' },
  { value: 'DIARIO_GENERAL', label: 'Diario General' },
  { value: 'AJUSTE', label: 'Ajuste' },
];

const mockAccounts = [
  { id: '1', code: '1.1.01.01', name: 'Caja' },
  { id: '2', code: '1.1.01.02', name: 'Banco' },
  { id: '3', code: '1.1.02.01', name: 'Cuentas por Cobrar' },
  { id: '4', code: '2.1.01.01', name: 'Proveedores' },
  { id: '5', code: '2.1.02.01', name: 'Impuestos por Pagar' },
  { id: '6', code: '3.1.01.01', name: 'Capital Social' },
  { id: '7', code: '4.1.01.01', name: 'Ingresos por Ventas' },
  { id: '8', code: '5.1.01.01', name: 'Gastos de Administración' },
  { id: '9', code: '6.1.01.01', name: 'Costo de Mercadería Vendida' },
];

export const NewJournalEntryPage: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [concept, setConcept] = useState('');
  const [reference, setReference] = useState('');
  const [sourceType, setSourceType] = useState('DIARIO_GENERAL');
  const [lines, setLines] = useState<LineForm[]>([
    { accountId: '', debitCents: '', creditCents: '', description: '' },
    { accountId: '', debitCents: '', creditCents: '', description: '' },
  ]);

  const totalDebit = lines.reduce((sum, l) => sum + (parseInt(l.debitCents) || 0), 0);
  const totalCredit = lines.reduce((sum, l) => sum + (parseInt(l.creditCents) || 0), 0);
  const isBalanced = totalDebit === totalCredit && totalDebit > 0;

  const addLine = () => {
    setLines([...lines, { accountId: '', debitCents: '', creditCents: '', description: '' }]);
  };

  const removeLine = (index: number) => {
    if (lines.length > 2) {
      setLines(lines.filter((_, i) => i !== index));
    }
  };

  const updateLine = (index: number, field: keyof LineForm, value: string) => {
    const updated = [...lines];
    updated[index] = { ...updated[index], [field]: value };
    setLines(updated);
  };

  const formatCents = (cents: number) => {
    return `$${(cents / 100).toFixed(2)}`;
  };

  return (
    <Layout currentPage="journal">
      <h2 style={{ marginTop: 0, color: '#1f2937' }}>Nuevo Asiento Contable</h2>

      <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Fecha *</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Tipo de Fuente *</label>
            <select
              value={sourceType}
              onChange={(e) => setSourceType(e.target.value)}
              style={inputStyle}
            >
              {sourceTypes.map((st) => (
                <option key={st.value} value={st.value}>{st.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Referencia</label>
            <input
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Nº Factura, etc."
              style={inputStyle}
            />
          </div>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label style={labelStyle}>Concepto / Descripción *</label>
          <textarea
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            placeholder="Descripción del asiento contable..."
            rows={2}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>
      </div>

      <div style={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, color: '#374151' }}>Líneas del Asiento</h3>
          <button
            onClick={addLine}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            + Agregar Línea
          </button>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', fontSize: '0.8rem', color: '#6b7280' }}>Cuenta</th>
              <th style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '2px solid #e5e7eb', fontSize: '0.8rem', color: '#6b7280', width: '150px' }}>Débito (¢)</th>
              <th style={{ padding: '0.5rem', textAlign: 'right', borderBottom: '2px solid #e5e7eb', fontSize: '0.8rem', color: '#6b7280', width: '150px' }}>Crédito (¢)</th>
              <th style={{ padding: '0.5rem', textAlign: 'left', borderBottom: '2px solid #e5e7eb', fontSize: '0.8rem', color: '#6b7280' }}>Descripción</th>
              <th style={{ padding: '0.5rem', borderBottom: '2px solid #e5e7eb', width: '40px' }}></th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line, index) => (
              <tr key={index}>
                <td style={{ padding: '0.5rem' }}>
                  <select
                    value={line.accountId}
                    onChange={(e) => updateLine(index, 'accountId', e.target.value)}
                    style={{ ...inputStyle, fontSize: '0.85rem' }}
                  >
                    <option value="">Seleccionar cuenta...</option>
                    {mockAccounts.map((acc) => (
                      <option key={acc.id} value={acc.id}>{acc.code} - {acc.name}</option>
                    ))}
                  </select>
                </td>
                <td style={{ padding: '0.5rem' }}>
                  <input
                    type="number"
                    value={line.debitCents}
                    onChange={(e) => updateLine(index, 'debitCents', e.target.value)}
                    placeholder="0"
                    min="0"
                    style={{ ...inputStyle, textAlign: 'right' }}
                  />
                </td>
                <td style={{ padding: '0.5rem' }}>
                  <input
                    type="number"
                    value={line.creditCents}
                    onChange={(e) => updateLine(index, 'creditCents', e.target.value)}
                    placeholder="0"
                    min="0"
                    style={{ ...inputStyle, textAlign: 'right' }}
                  />
                </td>
                <td style={{ padding: '0.5rem' }}>
                  <input
                    type="text"
                    value={line.description}
                    onChange={(e) => updateLine(index, 'description', e.target.value)}
                    placeholder="Descripción (opcional)"
                    style={inputStyle}
                  />
                </td>
                <td style={{ padding: '0.5rem', textAlign: 'center' }}>
                  {lines.length > 2 && (
                    <button
                      onClick={() => removeLine(index)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#dc2626',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                      }}
                    >
                      ×
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td style={{ padding: '0.75rem 0.5rem', fontWeight: 700, borderTop: '2px solid #e5e7eb' }}>TOTALES</td>
              <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right', fontWeight: 700, borderTop: '2px solid #e5e7eb', color: totalDebit > 0 ? '#1d4ed8' : '#9ca3af' }}>
                {formatCents(totalDebit)}
              </td>
              <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right', fontWeight: 700, borderTop: '2px solid #e5e7eb', color: totalCredit > 0 ? '#7c3aed' : '#9ca3af' }}>
                {formatCents(totalCredit)}
              </td>
              <td colSpan={2} style={{ padding: '0.75rem 0.5rem', borderTop: '2px solid #e5e7eb' }}>
                {isBalanced ? (
                  <span style={{ color: '#059669', fontWeight: 600 }}>✓ Asiento balanceado</span>
                ) : (
                  <span style={{ color: '#dc2626', fontWeight: 600 }}>
                    {totalDebit !== totalCredit ? '✗ Asiento desbalanceado' : 'Ingrese montos'}
                  </span>
                )}
              </td>
            </tr>
          </tfoot>
        </table>

        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#f3f4f6',
              color: '#374151',
              border: '1px solid #d1d5db',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Cancelar
          </button>
          <button
            disabled={!isBalanced || !concept}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: isBalanced && concept ? '#059669' : '#9ca3af',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: isBalanced && concept ? 'pointer' : 'not-allowed',
              fontWeight: 500,
            }}
          >
            Registrar Asiento
          </button>
        </div>
      </div>
    </Layout>
  );
};
