#!/usr/bin/env bash
## Amend current changes and push (inc. submodules).
bin="$(dirname "$(readlink -f "$0")")"
"$bin/amend-push-submodules.sh" "$@"
git add . && git commit --amend --no-edit && git push -f
