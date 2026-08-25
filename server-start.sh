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
npx prisma migrate deploy
node server.js
