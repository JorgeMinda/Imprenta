#!/usr/bin/env bash
set -e
cd "$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd .wasp/out/server
npm install
npx prisma migrate deploy --schema=../db/schema.prisma
node server.js
