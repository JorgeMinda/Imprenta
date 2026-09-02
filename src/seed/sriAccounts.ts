// Seed del Catálogo SRI de Cuentas Contables (Ecuador)
// Basado en el Subcatálogo de Cuentas del Sector Público del SRI

export const sriAccounts = [
  // ── ACTIVOS ──────────────────────────────────────────────────────────
  { code: '1', name: 'ACTIVOS', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1', name: 'ACTIVO CORRIENTE', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.01', name: 'Efectivo y equivalentes de efectivo', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.01.01', name: 'Caja', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.01.02', name: 'Banco', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.01.03', name: 'Fondos rotatorios', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.02', name: 'Inversiones temporales', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.02.01', name: 'Depósitos a plazo fijo', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.03', name: 'Cuentas por cobrar', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.03.01', name: 'Cuentas por cobrar - clientes', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.03.02', name: 'Anticipos pagados', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.03.03', name: 'IVA pagado (crédito tributario)', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.03.04', name: 'Retenciones en la fuente por cobrar', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.04', name: 'Inventarios', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.04.01', name: 'Mercaderías', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.04.02', name: 'Materia prima', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.1.05', name: 'Otros activos corrientes', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.1.05.01', name: 'Pagos anticipados', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2', name: 'ACTIVO NO CORRIENTE', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.2.01', name: 'Propiedad, planta y equipo', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.2.01.01', name: 'Terrenos', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.01.02', name: 'Edificios', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.01.03', name: 'Maquinaria y equipo', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.01.04', name: 'Mobiliario y equipo de oficina', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.01.05', name: 'Vehículos', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.01.06', name: 'Depreciación acumulada', type: 'ACTIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '1.2.02', name: 'Activos intangibles', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.2.02.01', name: 'Patentes y marcas', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.02.02', name: 'Software', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '1.2.03', name: 'Inversiones a largo plazo', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '1.2.03.01', name: 'Inversiones permanentes', type: 'ACTIVO', naturalSign: 'DEUDORA', isDetail: true },

  // ── PASIVOS ──────────────────────────────────────────────────────────
  { code: '2', name: 'PASIVOS', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1', name: 'PASIVO CORRIENTE', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1.01', name: 'Cuentas por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1.01.01', name: 'Proveedores nacionales', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.01.02', name: 'Proveedores del exterior', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.02', name: 'Obligaciones tributarias', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1.02.01', name: 'IVA por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.02.02', name: 'Retenciones en la fuente por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.02.03', name: 'Impuesto a la renta por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.02.04', name: 'Impuesto al valor agregado por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.02.05', name: 'Anticipo de impuesto a la renta', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.03', name: 'Obligaciones laborales', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1.03.01', name: 'Sueldos por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.03.02', name: 'Beneficios sociales por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.03.03', name: 'Aportes IESS por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.1.04', name: 'Otros pasivos corrientes', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.1.04.01', name: 'Préstamos a corto plazo', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.2', name: 'PASIVO NO CORRIENTE', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.2.01', name: 'Obligaciones a largo plazo', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '2.2.01.01', name: 'Préstamos bancarios a largo plazo', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '2.2.01.02', name: 'Hipotecas por pagar', type: 'PASIVO', naturalSign: 'ACREEDORA', isDetail: true },

  // ── PATRIMONIO ───────────────────────────────────────────────────────
  { code: '3', name: 'PATRIMONIO', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '3.1', name: 'PATRIMONIO NETO', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '3.1.01', name: 'Capital', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '3.1.01.01', name: 'Capital social', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '3.1.01.02', name: 'Aportes para futuros aumentos de capital', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '3.1.02', name: 'Resultados no asignados', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '3.1.02.01', name: 'Resultados acumulados', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '3.1.02.02', name: 'Resultados del ejercicio', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '3.1.03', name: 'Otras áreas del patrimonio', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '3.1.03.01', name: 'Superávit de revaluación', type: 'PATRIMONIO', naturalSign: 'ACREEDORA', isDetail: true },

  // ── INGRESOS ─────────────────────────────────────────────────────────
  { code: '4', name: 'INGRESOS', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '4.1', name: 'INGRESOS OPERACIONALES', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '4.1.01', name: 'Ingresos por ventas', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '4.1.01.01', name: 'Ventas de mercaderías', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '4.1.01.02', name: 'Ventas de productos terminados', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '4.1.01.03', name: 'Ventas de servicios', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '4.1.02', name: 'Devoluciones en ventas', type: 'INGRESO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '4.1.02.01', name: 'Devoluciones de mercaderías', type: 'INGRESO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '4.1.03', name: 'Descuentos concedidos', type: 'INGRESO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '4.1.03.01', name: 'Descuentos por pronto pago', type: 'INGRESO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '4.2', name: 'INGRESOS NO OPERACIONALES', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '4.2.01', name: 'Otros ingresos', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: false },
  { code: '4.2.01.01', name: 'Ingresos financieros', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true },
  { code: '4.2.01.02', name: 'Ingresos por alquileres', type: 'INGRESO', naturalSign: 'ACREEDORA', isDetail: true },

  // ── GASTOS ───────────────────────────────────────────────────────────
  { code: '5', name: 'GASTOS', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1', name: 'GASTOS DE ADMINISTRACIÓN', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.01', name: 'Sueldos y salarios', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.01.01', name: 'Sueldos y salarios', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.01.02', name: 'Bonificaciones', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.02', name: 'Beneficios sociales', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.02.01', name: 'Décimo tercer sueldo', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.02.02', name: 'Décimo cuarto sueldo', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.02.03', name: 'Vacaciones', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.02.04', name: 'Utilidades', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.03', name: 'Servicios básicos', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.03.01', name: 'Servicio de energía eléctrica', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.03.02', name: 'Servicio de agua potable', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.03.03', name: 'Servicio de teléfono', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.03.04', name: 'Servicio de internet', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.04', name: 'Arrendamientos', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.04.01', name: 'Arrendamiento de local comercial', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.05', name: 'Mantenimiento y reparaciones', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.05.01', name: 'Mantenimiento de equipos', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.05.02', name: 'Reparaciones menores', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.06', name: 'Seguros', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.06.01', name: 'Seguro contra todo riesgo', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.07', name: 'Depreciación', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.07.01', name: 'Depreciación de propiedad, planta y equipo', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.08', name: 'Gastos varios de administración', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.1.08.01', name: 'Papelería y útiles de oficina', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.1.08.02', name: 'Imprevistos', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.2', name: 'GASTOS DE VENTAS', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.2.01', name: 'Publicidad y propaganda', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.2.01.01', name: 'Publicidad en medios', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.2.02', name: 'Comisiones de ventas', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.2.02.01', name: 'Comisiones a vendedores', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.3', name: 'GASTOS FINANCIEROS', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.3.01', name: 'Gastos financieros', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: false },
  { code: '5.3.01.01', name: 'Intereses pagados', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.3.01.02', name: 'Comisiones bancarias', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },
  { code: '5.3.01.03', name: 'Diferencial cambiario', type: 'GASTO', naturalSign: 'DEUDORA', isDetail: true },

  // ── COSTOS ───────────────────────────────────────────────────────────
  { code: '6', name: 'COSTOS', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: false },
  { code: '6.1', name: 'COSTO DE VENTAS', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: false },
  { code: '6.1.01', name: 'Costo de mercadería vendida', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: false },
  { code: '6.1.01.01', name: 'Costo de mercadería vendida', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true },
  { code: '6.1.02', name: 'Costo de productos vendidos', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: false },
  { code: '6.1.02.01', name: 'Costo de producción', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true },
  { code: '6.1.03', name: 'Costo de servicios prestados', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: false },
  { code: '6.1.03.01', name: 'Costo de mano de obra directa', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true },
  { code: '6.1.03.02', name: 'Costo de materiales directos', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true },
  { code: '6.1.03.03', name: 'Costos indirectos de fabricación', type: 'COSTOS', naturalSign: 'DEUDORA', isDetail: true },
];

export function buildAccountTree(accounts: typeof sriAccounts) {
  const map = new Map<string, any>();
  const roots: any[] = [];

  for (const acc of accounts) {
    map.set(acc.code, { ...acc, id: acc.code, children: [] });
  }

  for (const acc of accounts) {
    const node = map.get(acc.code)!;
    const parentCode = acc.code.split('.').slice(0, -1).join('.');
    if (map.has(parentCode)) {
      map.get(parentCode)!.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}
