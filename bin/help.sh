#!/usr/bin/env bash
## Print usage details of a command.
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
fil="$dir/../man/$1.txt"

if [ -f "$fil" ]; then cat "$fil"; else git help "$1"; fi
