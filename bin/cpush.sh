#!/usr/bin/env bash
## Commit current changes and push (inc. submodules).
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
prefix="$GIT_COMMIT_PREFIX"

"$dir/cpush-submodules.sh" "$@"
git add . && git commit -m "$prefix $1" && git push
