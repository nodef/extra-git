#!/usr/bin/env bash
## Amend current changes and push (inc. submodules).
dir="$(dirname "$(readlink -f "$0")")"

"$dir/apush-submodules.sh" "$@"
git add . && git commit --amend --no-edit && git push -f
