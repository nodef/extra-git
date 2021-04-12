#!/usr/bin/env bash
## Commit current changes and push all submodules
prefix="$GIT_COMMIT_PREFIX"
git submodule foreach --recursive "git add . && git commit -m '$prefix $1' && git push"
