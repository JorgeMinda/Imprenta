#!/usr/bin/env bash
set -e
cd "$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
if [ -d ".wasp/build/server" ]; then
  SRV=".wasp/build/server"
else
  SRV=".wasp/out/server"
fi
cd "$SRV"
npm install
# No migrations are committed yet, so bootstrap the schema directly.
# (Once you adopt Prisma migrations, switch this back to `npx prisma migrate deploy`.)
npx prisma db push --accept-data-loss
node server.js
