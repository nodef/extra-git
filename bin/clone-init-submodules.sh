#!/usr/bin/env bash
## Clone repository to local (inc. submodules).
bin="$(dirname "$(readlink -f "$0")")"
url="$( "$bin/fullurl.sh" "$1" )"
if [[ "$2" == "" ]]; then repo="$( "$bin/basename.sh" "$1" )"; else repo="$2"; fi
git clone "$url" "$repo" && cd "$repo"
"$bin/init-submodules.sh"
