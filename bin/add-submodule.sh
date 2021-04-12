#!/usr/bin/env bash
## Add submodule to repository
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
url="$( "$dir/url.sh" "$1" )"

git submodule add "$url" "$2"
"$dir/init-submodules.sh"
