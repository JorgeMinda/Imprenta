#!/usr/bin/env bash
set -e
export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix ~/.npm-global >/dev/null 2>&1
npm install -g @wasp.sh/wasp-cli@0.25.0
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd "$SCRIPT_DIR"
echo "===== BUILD DEBUG ====="
echo "PWD=$(pwd)"
ls -la
echo "which wasp: $(command -v wasp)"
wasp version
echo "===== END DEBUG ====="
wasp install
wasp build
