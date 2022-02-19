#!/usr/bin/env bash
## Add submodule to repository.
bin="$(dirname "$(readlink -f "$0")")"
url="$( "$bin/fullurl.sh" "$1" )"
git submodule add "$url" "$2"
"$bin/init-submodules.sh"
