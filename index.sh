#!/usr/bin/env bash
## Common utility commands for Git repositories.
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cmd="$dir/bin/$1.sh"
if   [[ "$2" == "--help" ]]; then "$dir/help.sh" "$1"
elif [[ "$1" == "--help" ]]; then "$dir/help.sh"
elif [ -f "$cmd" ]; then shift; $cmd "$@"
else git "$@"; fi
