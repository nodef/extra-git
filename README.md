Common utility commands for [Git] repositories.<br>
:package: [NPM](https://www.npmjs.com/package/extra-git),
:smiley_cat: [GitHub](https://github.com/orgs/nodef/packages?repo_name=extra-git),
:scroll: [Files](https://unpkg.com/extra-git/),
:blue_book: [Wiki](https://github.com/nodef/extra-git/wiki/).

This is an extension of ["git-extras"] and ["git-extra-commands"], including
some additional commonly used git tools; [cpush], [apush], and [xclone]. You
can install this with `npm install -g extra-git`.

> Stability: Experimental.

<br>

```bash
# Commit current changes and push (inc. submodules)
$ egit cpush "message"

# Amend current changes and push (inc. submodules)
$ egit apush

# Clone repository to local (inc. submodules)
$ egit xclone openstack/openstack




# Do a hard reset and delete all untracked files
$ egit clear


# List authors
$ egit authors --list
$ egit authors --list --no-email

# TJ Holowaychuk <tj@vision-media.ca>
# hemanth.hm <hemanth.hm@gmail.com>
# Jonhnny Weslley <jw@jonhnnyweslley.net>
# nickl- <github@jigsoft.co.za>
# Leila Muhtasib <muhtasib@gmail.com>


# Merge commits from src-branch into the current branch as a single commit
$ git squash fixed-cursor-styling
$ git squash fixed-cursor-styling "Fixed cursor styling"
$ git squash 95b7c52
$ git squash HEAD~3
$ git squash HEAD~3 "Work on a feature"




# Current branch name in automation-friendly format
$ egit branch-name
# main

# Delete all local branches that have been merged into HEAD
$ egit delete-local-merged

# Show files being ignored by git in the repo
$ egit ignored
```

<br>
<br>


## Index

| Name     | Action                                     |
| -------- | ------------------------------------------ |
| [is]     | Checks if value is boolean.                |


branches
commit-count
commits-per-day
compact
find-dirty
github-open
history-eraser
mark-all-resolved
nuke-untracked-files
rebase-work-in-progress
rscp
stashes
taglist
tags
unlock
unpushed-stat
up-old
utimes

[Git]: https://git-scm.com
["git-extras"]: https://github.com/tj/git-extras
["git-extra-commands"]: https://github.com/unixorn/git-extra-commands
[cpush]: https://github.com/nodef/extra-git/wiki/cpush
[apush]: https://github.com/nodef/extra-git/wiki/apush
[xclone]: https://github.com/nodef/extra-git/wiki/xclone
