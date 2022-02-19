#!/usr/bin/env bash
## Amend current changes and push all submodules.
git submodule foreach --recursive "git add . && git commit --amend --no-edit && git push -f"
