#!/usr/bin/env bash
set -e
export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix ~/.npm-global >/dev/null 2>&1
npm install -g @wasp.sh/wasp-cli@0.25.0
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
DIR="$SCRIPT_DIR"
while [ ! -f "$DIR/main.wasp.ts" ] && [ ! -f "$DIR/main.wasp" ] && [ "$DIR" != "$(dirname "$DIR")" ]; do
  DIR="$(dirname "$DIR")"
done
cd "$DIR"
wasp build
