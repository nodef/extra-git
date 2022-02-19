#!/usr/bin/env bash
## Clone repository to local (inc. submodules).
dir="$(dirname "$(readlink -f "$0")")"


url="$( "$dir/fullurl.sh" "$1" )"
if [[ "$2" == "" ]]; then repo="$( "$dir/basename.sh" "$1" )"; else repo="$2"; fi
git clone "$url" "$repo" && cd "$repo"
"$dir/init-submodules.sh"
