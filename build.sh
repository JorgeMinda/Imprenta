#!/usr/bin/env bash
set -e
npm config set prefix ~/npm-global
export PATH="$HOME/npm-global/bin:$PATH"
npm install -g @wasp.sh/wasp-cli@0.24
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd "$SCRIPT_DIR"
wasp install
wasp build
cd .wasp/out/server
npm install
npx prisma generate --schema=../db/schema.prisma
npm run bundle
