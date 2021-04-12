#!/usr/bin/env bash
## Amend current changes and push all submodules
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
url="$( "$dir/url.sh" "$1" )"

git submodule foreach --recursive "git add . && git commit --amend --no-edit && git push -f"
