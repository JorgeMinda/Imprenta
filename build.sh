#!/usr/bin/env bash
set -e
export PATH="$HOME/.local/bin:$HOME/.npm-global/bin:$PATH"
curl -fsSL https://get.wasp.sh/installer.sh | sh -s -- -v 0.25.0
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
cd "$SCRIPT_DIR"
wasp install
wasp build
