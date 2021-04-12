#!/usr/bin/env bash
## Get full URL of repository
host="${VCS_HOST:=github.com}"
protocol="${VCS_PROTOCOL:=https:}"
username="${VCS_USERNAME:=$GITHUB_USERNAME}"
a="$1"

if [[ "$a" != *"/"* ]]; then a="$username/$a"; fi
if [[ "$a" != *"$host/"* ]]; then a="$host/$a"; fi
if [[ ! "$a" =~ ^(git://|https?://) ]]; then a="$protocol//$a"; fi
echo "$a"
