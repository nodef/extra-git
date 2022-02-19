#!/usr/bin/env bash
## Amend current changes and push all submodules.
dir="$(dirname "$(readlink -f "$0")")"
url="$( "$dir/fullurl.sh" "$1" )"

git submodule foreach --recursive "git add . && git commit --amend --no-edit && git push -f"
