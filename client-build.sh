#!/usr/bin/env bash
set -e
npm config set prefix ~/npm-global
export PATH="$HOME/npm-global/bin:$PATH"
npm install -g @wasp.sh/wasp-cli@0.24
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd "$SCRIPT_DIR"
wasp install
wasp build
npx vite build
cp .wasp/out/web-app/build/200.html .wasp/out/web-app/build/index.html 2>/dev/null || true
mkdir -p .wasp/build/web-app
cp -r .wasp/out/web-app/build .wasp/build/web-app/
