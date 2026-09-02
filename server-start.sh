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
npx prisma migrate deploy --schema="$SCHEMA"
npm run start-production
