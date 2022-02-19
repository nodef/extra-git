#!/usr/bin/env bash
## Common utility commands for Git repositories.
bin="$(dirname "$(readlink -f "$0")")/bin"
cmd="$bin/$1.sh"
if   [[ "$2" == "--help" ]]; then "$bin/help.sh" "$1"
elif [[ "$1" == "--help" ]]; then "$bin/help.sh"
elif [ -f "$cmd" ]; then shift; "$cmd" "$@"
else git "$@"; fi
