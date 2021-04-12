#!/usr/bin/env bash
## Amend current changes and push (inc. submodules)
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

"$dir/apush-submodule.sh" "$@"
git add . && git commit --amend --no-edit && git push -f
