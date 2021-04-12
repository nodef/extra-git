#!/usr/bin/env bash
## Clone repository to local (inc. submodules)
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
url="$( "$dir/url.sh" "$1" )"
repo="$2"


git clone "$url" "$2"
if [[ "$repo" == "" ]]; then repo="$( "$dir/name.sh" "$1" )"
cd "$repo" && "$dir/init-submodules.sh"
