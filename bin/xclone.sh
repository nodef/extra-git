#!/usr/bin/env bash
## Clone repository to local (inc. submodules).
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"


url="$( "$dir/url.sh" "$1" )"
if [[ "$2" == "" ]]; then repo="$( "$dir/name.sh" "$1" )"; else repo="$2"; fi
git clone "$url" "$repo" && cd "$repo"
"$dir/init-submodules.sh"
