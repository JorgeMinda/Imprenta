#!/usr/bin/env bash
set -e
export PATH="$HOME/.npm-global/bin:$PATH"
npm config set prefix ~/.npm-global >/dev/null 2>&1
npm install -g @wasp.sh/wasp-cli@0.25.0
cd "$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
wasp build
