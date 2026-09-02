#!/usr/bin/env bash
set -e
cd "$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd .wasp/out/server
npm install
if [ -z "$DATABASE_URL" ]; then
  echo "❌ ERROR: La variable DATABASE_URL no está configurada o está vacía."
  echo "Configúrala en el Dashboard de Render: imprenta-server > Environment > DATABASE_URL"
  exit 1
fi

npx prisma migrate deploy --schema=../db/schema.prisma

if npm run | grep -q "start-production"; then
  exec npm run start-production
elif [ -f "bundle/server.js" ]; then
  exec node bundle/server.js
else
  exec node server.js
fi
