#!/usr/bin/env bash
## Common utility commands for Git repositories.
dir="$(dirname "$(readlink -f "$0")")"

cmd="$dir/bin/$1.sh"
if   [[ "$2" == "--help" ]]; then "$dir/bin/help.sh" "$1"
elif [[ "$1" == "--help" ]]; then "$dir/bin/help.sh"
elif [ -f "$cmd" ]; then shift; "$cmd" "$@"
else git "$@"; fi
