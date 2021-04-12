#!/usr/bin/env bash
## GIT utilities -- repo summary, repl, changelog population, author commit percentages and more.
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

cmd="$dir/bin/$1.sh"
if [ -f "$cmd" ]; then shift; $cmd "$@"
else git "$@"; fi
