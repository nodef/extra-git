#!/usr/bin/env bash
## Initialize all submodules.
git submodule update --recursive --init
git submodule foreach --recursive "git checkout master"
