#!/usr/bin/env bash
## Get default branch (local) of repository.
basename $(git rev-parse --abbrev-ref origin/HEAD)


# References
# - https://stackoverflow.com/a/62397081/1413259
