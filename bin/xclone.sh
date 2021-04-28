#!/usr/bin/env bash
## Clone repository to local (inc. submodules).
dir="$(dirname "$(readlink -f "$0")")"


url="$( "$dir/url.sh" "$1" )"
if [[ "$2" == "" ]]; then repo="$( "$dir/name.sh" "$1" )"; else repo="$2"; fi
git clone "$url" "$repo" && cd "$repo"
"$dir/init-submodules.sh"
