#!/usr/bin/env bash
set -e
export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix ~/.npm-global >/dev/null 2>&1
npm install -g @wasp.sh/wasp-cli@0.25.0

# Encontrar la raíz del proyecto (donde esté main.wasp), subiendo desde el dir del script.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
DIR="$SCRIPT_DIR"
while [ ! -f "$DIR/main.wasp" ] && [ "$DIR" != "$(dirname "$DIR")" ]; do
  DIR="$(dirname "$DIR")"
done

echo "===== BUILD DEBUG ====="
echo "SCRIPT_DIR=$SCRIPT_DIR"
echo "PROJECT_DIR=$DIR"
echo "wasp: $(command -v wasp) ($(wasp --version 2>&1))"
echo "ls -la \$PROJECT_DIR:"
ls -la "$DIR"
echo "===== END DEBUG ====="

cd "$DIR"
wasp build
