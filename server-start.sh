#!/usr/bin/env bash
set -e
ROOT="$(git rev-parse --show-toplevel)"
if [ -d "$ROOT/.wasp/build/server" ]; then
  SRV="$ROOT/.wasp/build/server"
else
  SRV="$ROOT/.wasp/out/server"
fi
cd "$SRV"
npx prisma migrate deploy
node server.js
