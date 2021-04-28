#!/usr/bin/env bash
## Print usage details of a command.
dir="$(dirname "$(readlink -f "$0")")"
url="https://github.com/nodef/extra-git/issues"

fil="$dir/../man/$1.txt"
if   [[ "$1" == "" ]]; then less "$dir/../man/help.txt"
elif [ -f "$fil" ];    then less "$fil"
else echo "No help found for '$1'. You can report this at ${url}"; fi
