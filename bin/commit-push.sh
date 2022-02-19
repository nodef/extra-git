#!/usr/bin/env bash
## Commit current changes and push (inc. submodules).
dir="$(dirname "$(readlink -f "$0")")"
prefix="$GIT_COMMIT_PREFIX"

"$dir/commit-push-submodules.sh" "$@"
git add . && git commit -m "$prefix $1" && git push
