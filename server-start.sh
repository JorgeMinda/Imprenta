#!/usr/bin/env bash
set -e
cd "$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd .wasp/out/server
npm install
if [ -f "../db/schema.prisma" ]; then
  SCHEMA="../db/schema.prisma"
elif [ -f "../../../schema.prisma" ]; then
  SCHEMA="../../../schema.prisma"
else
  SCHEMA="schema.prisma"
fi

echo "Usando schema en: $SCHEMA"

# El Transaction Pooler de Supabase (:6543) no soporta advisory locks y se cuelga en migraciones.
# Usamos el Session Mode (:5432) para correr las migraciones:
MIGRATE_URL="${DATABASE_URL/:6543/:5432}"

echo "Ejecutando migraciones de base de datos..."
DATABASE_URL="$MIGRATE_URL" npx prisma migrate deploy --schema="$SCHEMA"
echo "Migraciones aplicadas con éxito."

echo "Iniciando servidor de producción en el puerto $PORT..."
npm run start-production
