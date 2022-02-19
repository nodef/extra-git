#!/usr/bin/env bash
## Initialize all submodules.
branch="$(basename $(git rev-parse --abbrev-ref origin/HEAD))"
git submodule update --recursive --init
git submodule foreach --recursive "git checkout $branch"
