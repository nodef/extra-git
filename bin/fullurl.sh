#!/usr/bin/env bash
## Get full URL of repository from partial.
host="${VCS_HOST:=github.com}"
protocol="${VCS_PROTOCOL:=https:}"
username="${VCS_USERNAME:=$GITHUB_USERNAME}"
extname="$VCS_EXTNAME"
a="$1"

if [[ "$a" != *"/"* ]]; then a="$username/$a"; fi
if [[ "$a" != *"$host/"* ]]; then a="$host/$a"; fi
if [[ "$a" != *"$extname" ]]; then a="$a$extname"; fi
if [[ ! "$a" =~ ^(git://|https?://) ]]; then a="$protocol//$a"; fi
echo "$a"
