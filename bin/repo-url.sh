#!/usr/bin/env bash
## Get full URL of repository
a="$1"
if [[ "$a" != *"/"* ]]; then a="$GITHUB_USERNAME/$a"; fi
if [[ "$a" != *"github.com/"* ]]; then a="github.com/$a"; fi
if [[ ! "$a" =~ ^(git://|https?://) ]]; then a="https://$a"; fi
echo "$a"
