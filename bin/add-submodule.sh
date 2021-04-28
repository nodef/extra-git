#!/usr/bin/env bash
## Add submodule to repository.
dir="$(dirname "$(readlink -f "$0")")"
url="$( "$dir/url.sh" "$1" )"

git submodule add "$url" "$2"
"$dir/init-submodules.sh"
