// Script de seed para poblar el catálogo SRI de cuentas contables
// Ejecutar: npx tsx src/seed/seed.ts

import { PrismaClient } from '@prisma/client';
import { sriAccounts } from './sriAccounts';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed del catálogo SRI...');

  // Verificar si ya existen cuentas
  const existingCount = await prisma.account.count();
  if (existingCount > 0) {
    console.log(`Ya existen ${existingCount} cuentas. Saltando seed.`);
    return;
  }

  // Crear cuentas desde el catálogo SRI
  for (const account of sriAccounts) {
    // Buscar padre por código
    let parentId: string | null = null;
    if (account.code.includes('.')) {
      const parentCode = account.code.split('.').slice(0, -1).join('.');
      const parent = await prisma.account.findUnique({ where: { code: parentCode } });
      if (parent) {
        parentId = parent.id;
      }
    }

    await prisma.account.create({
      data: {
        code: account.code,
        name: account.name,
        type: account.type as any,
        naturalSign: account.naturalSign as any,
        isDetail: account.isDetail,
        active: true,
        parentId,
      },
    });

    console.log(`  ✓ ${account.code} - ${account.name}`);
  }

  // Crear período fiscal actual
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  const periodLabel = `${currentYear}-${String(currentMonth).padStart(2, '0')}`;

  const existingPeriod = await prisma.fiscalPeriod.findFirst({
    where: { label: periodLabel },
  });

  if (!existingPeriod) {
    const startDate = new Date(currentYear, currentMonth - 1, 1);
    const endDate = new Date(currentYear, currentMonth, 0, 23, 59, 59);

    await prisma.fiscalPeriod.create({
      data: {
        label: periodLabel,
        startDate,
        endDate,
        closed: false,
      },
    });
    console.log(`  ✓ Período fiscal creado: ${periodLabel}`);
  }

  console.log('Seed completado exitosamente.');
}

main()
  .catch((e) => {
    console.error('Error durante el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
