#!/usr/bin/env bash
## Get name of repository from URL.
a="$1"

a="${a%.git}"
a="${a##*/}"
echo "$a"
