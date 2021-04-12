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
$ egit squash fixed-cursor-styling
$ egit squash fixed-cursor-styling "Fixed cursor styling"
$ egit squash 95b7c52
$ egit squash HEAD~3
$ egit squash HEAD~3 "Work on a feature"




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

| Command         | Action                       |
| --------------- | ---------------------------- |
| [add-submodule] | Add submodule to repository. |
| [add-username-remote] | Adds a remote for the current repository for the given githu ... |
| [age] | A git-blame viewer, written using PyGTK. |
| [ahead-of-master] | Show commits that haven't made it to master yet. |
| [alias] | Define, search and show aliases. |
| [apush] | Amend current changes and push (inc. submodules). |
| [apush-submodules] | Amend current changes and push all submodules. |
| [archive-file] | Export the current HEAD of the git repository to an archive. |
| [attic] | Displays a list of deleted files in your repo. The output is ... |
| [authors] | Generate authors report. |
| [big-file] | Show files in the repo larger than a threshold size. |
| [branch-name] | Prints the current branch name in automation-friendly format. |
| [branch-rebaser] | Kicks off an interactive rebase of all the commits on your b ... |
| [browse] | View the web page for the current repository. |
| [brv] | List branches sorted by their last commit date. |
| [bulk] | Run git commands on multiple repositories. |
| [change-author] | Change one author/email in the history to another. |
| [change-log] | Transform git log output into a complete Changelog for proje ... |
| [changelog] | Generate a changelog report. |
| [changes] | List authors in the repo in descending commit-count order. |
| [checkout-pr] | Check out a PR locally. |
| [churn] | Show which files are getting changed most often in the repos ... |
| [clear] | Rigorously clean up a repository. |
| [clear-soft] | Soft clean up a repository. |
| [clone-subset] | Uses git clone and git filter-branch to remove from the clon ... |
| [coauthor] | Add a co-author to the last commit. |
| [comma] | Adds and commits a file in one command. |
| [commits-since] | Show commit logs since some date. |
| [conflicts] | Show files with conflicts. |
| [contrib] | Show user's contributions. |
| [copy-branch-name] | Copy the current branch's name to the clipboard (macOS Only). |
| [count] | Show commit count. |
| [cp] | Copy a file keeping its history. |
| [cpush] | Commit current changes and push (inc. submodules). |
| [cpush-submodules] | Commit current changes and push all submodules. |
| [create-branch] | Create branches. |
| [credit] | Quicker way to assign credit to another author on the latest ... |
| [current-branch] | Prints the name of the current branch, mainly useful in auto ... |
| [cut-branch] | Create a new branch pointed at **HEAD** and reset the curren ... |
| [delete-branch] | Delete branches. |
| [delete-local-merged] | Delete all local branches that have been merged into **HEAD**. |
| [delete-merged-branches] | Delete merged branches. |
| [delete-merged-branches] | Delete merged branches. |
| [delete-submodule] | Delete submodules. |
| [delete-tag] | Delete tags. |
| [delete-tag] | Delete tags. |
| [delta] | Lists changed files. |
| [diff-last] | Show the last change made to a file in the repository. |
| [divergence] | Shows differences between local branch and its tracking branch. |
| [edit-conflicts] | Edit the files that are marked as conflicted during a merge/ ... |
| [effort] | Show effort statistics on file(s). |
| [feature] | Create/Merge feature branch. |
| [fetch-pull-requests] | Fetch pull requests from github so you can git checkout pull ... |
| [find-dirty] | . |
| [flush] | Compact your reposistory by dropping all reflogs, stashes, a ... |
| [force-clone] | overwrite local repositories with clone. |
| [force-mtimes] | Sets mtimes of all files in the reprository their last chang ... |
| [forest] | Prints a text-based tree visualisation of your repository. R ... |
| [fork] | Fork a repo on github. |
| [fresh-branch] | Create fresh branches. |
| [functionlog] | Allows you to get a log of a particular function, not a file. |
| [gh-pages] | Create the GitHub Pages branch. |
| [git] | Typing git git foo will make git do a git foo instead of com ... |
| [github-open] | . |
| [gitlab-mr] | Open a merge request on GitLab. |
| [graft] | Merge and destroy a given branch. |
| [guilt] | calculate change between two revisions. |
| [help] | Print usage details of a command. |
| [history-graph] | Pretty git log, single line per commit, with branch graphign. |
| [ignore] | Add .gitignore patterns. |
| [ignore-io] | Get sample gitignore file. |
| [ignored] | Show files being ignored by git in the repo. |
| [improved-merge] | Sophisticated git merge with integrated CI check and automat ... |
| [incoming] | Show commits in the tracking branch that are not in the loca ... |
| [info] | Returns information on current repository. |
| [init-submodules] | Initialize all submodules. |
| [lines] | Gives you a list of author names with the number of lines la ... |
| [local-commits] | List local commits. |
| [lock] | Lock a file excluded from version control. |
| [locked] | ls files that have been locked. |
| [ls-object-refs] | Find references to an object with SHA1 in refs, commits, and ... |
| [maildiff] | A simple git command to email diff in color to reviewer/ co- ... |
| [maxpack] | Compress a repo's pack files as much as possible. |
| [merge-into] | Merge one branch into another. |
| [merge-repo] | Merge two repo histories. |
| [missing] | Show commits missing from another branch. |
| [move-commits] | git move-commits num-commits correct-branch moves the last n ... |
| [mr] | Checks out a merge request locally. |
| [name] | Get name of repository from URL. |
| [neck] | Show commits from the HEAD until the first branching point.  ... |
| [nuke] | Nukes a branch locally and on the origin remote. |
| [object-deflate] | Deflate an loose object file and write to standard output. |
| [obliterate] | rewrite past commits to remove some files. |
| [outgoing] | Show commits that are on the local branch that have not been ... |
| [overwritten] | Aggregates git blame information about original owners of li ... |
| [paste] | Send patches to pastebin for chat conversations. |
| [pie-ify] | git pie-ify pattern replacement. |
| [plotrepo] | Uses dot to draw a graph of the repository. |
| [pr] | Checks out a pull request locally. |
| [promote] | Promotes a local topic branch to a remote tracking branch of ... |
| [prune-branches] | Deletes each fully merged branch after prompting for confirm ... |
| [pruneall] | Prune branches from specified remotes, or all remotes when n ... |
| [psykorebase] | Rebase a branch with a merge commit. |
| [publish] | git publish remote remote-branch. |
| [pull-request] | Create pull request for GitHub project. |
| [purge-from-history] | Permanently delete files or folders from your git repository. |
| [pylint] | Runs pylint on any .py files modified or added in the git st ... |
| [rank-contributors] | Rummages through the changelog and orders contributors by th ... |
| [reauthor] | Rewrite history to change author's identity. |
| [rebase-authors] | Adds authorship info to interactive git rebase output. |
| [rebase-patch] | Rebases a patch. |
| [rebase-theirs] | Resolve rebase conflicts by favoring 'theirs' version. |
| [recently-checkedout-branches] | Shows timestamp and name of recently checked-out branches in ... |
| [ref-recent] | Shows the date, branch name, commit hash, and commit subject ... |
| [rel] | Shows the relationship between the current branch and *ref*. ... |
| [related] | Show other files that often get changed in commits that touc ... |
| [release] | Commit, tag and push changes to the repository. |
| [remote-default-branch] | Shows the default branch for a specified remote, defaults to ... |
| [rename-branch] | rename local branch and push to remote. |
| [rename-branches] | Rename multiple branches that start with a given name. |
| [rename-remote] | Rename a remote. |
| [rename-tag] | Rename a tag. |
| [repl] | git read-eval-print-loop. |
| [reset-file] | Reset one file. |
| [reset-with-fire] | Hard reset the working directory, then zap any files not kno ... |
| [restore-mtime] | Change mtime of files based on commit date of last change. |
| [rm-deleted-from-repo] | Removes files you deleted with rm from the repo for you. |
| [root] | show path of root. |
| [root-directory] | Prints the path to the root of the git repository you're in. |
| [roots] | Show the root commits. |
| [run-command-on-revisions] | Runs a given command over a range of Git revisions. |
| [scp] | Copy files to SSH compatible git-remote. |
| [sed] | replace patterns in git-controlled files. |
| [setup] | Set up a git repository. |
| [shamend] | Amends your staged changes as a fixup (keeping the pre-exist ... |
| [show-merged-branches] | Show merged branches. |
| [show-overwritten] | Aggregates git blame information about the original owners o ... |
| [show-tree] | show branch tree of commit history. |
| [show-unmerged-branches] | Show unmerged branches. |
| [shrink-repo] | Shrinks your clone of a git repo. |
| [sp] | Simple push, single short command to commit, and push. Use - ... |
| [squash] | squash N last changes up to a ref'ed commit. |
| [sr] | Use fzf to switch to a different git ref. |
| [stamp] | Stamp the last commit message. |
| [standup] | Recall the commit history. |
| [submodule-rm] | Allows you to remove a submodule easily with git submodule-r ... |
| [summary] | Show repository summary. |
| [switch-branch] | Make it easier to switch to a branch by a substring of its n ... |
| [sync] | Sync local branch with remote branch. |
| [tag-and-sign] | Create and sign a new tag. |
| [thanks] | List the contributors to a repository in descending commit o ... |
| [touch] | Touch and add file to the index. |
| [track] | Sets up your branch to track a remote branch. Assumes you me ... |
| [trail] | Show all branching points in the repo's Git history so you c ... |
| [undelete] | Undeletes a file. |
| [undo] | Remove latest commits. |
| [undo-push] | Undoes your last push to branch **1** of origin. |
| [unlock] | Unlock a file excluded from version control. |
| [unpushed] | Show which commits have not been pushed to the tracking bran ... |
| [unreleased] | Shows git commits since the last tagged version. |
| [up] | . |
| [upstream-sync] | Fetches *upstream/yourforkname* and rebases it into your loc ... |
| [url] | Get full URL of repository. |
| [utimes] | Change files modification time to their last commit date. |
| [what-the-hell-just-happened] | Show what just happened. |
| [when-merged] | Find when a commit was merged into one or more branches. |
| [where] | Shows where a particular commit falls between releases. |
| [whoami] | Shows what username  email you have configured for the repo  ... |
| [winner] | Shows what authors have made the most commits, both by numbe ... |
| [wordiness] | Shows how wordy people's commit messages are. Useful for sha ... |
| [work-in-progress] | Starts an interactive rebase of all the commits you haven't  ... |
| [wtf] | git-wtf displays the state of your repository in a readable, ... |
| [xclone] | Clone repository to local (inc. submodules). |

<br>
<br>


## References

- ["git-extras"]
- ["git-extra-commands"]

<br>
<br>

[![](https://img.youtube.com/vi/Nzr4qG_yZHU/maxresdefault.jpg)](https://www.youtube.com/watch?v=Nzr4qG_yZHU)

[Git]: https://git-scm.com
["git-extras"]: https://github.com/tj/git-extras
["git-extra-commands"]: https://github.com/unixorn/git-extra-commands
[add-username-remote]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[age]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[attic]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[big-file]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[branch-name]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[branch-rebaser]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[change-author]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[change-log]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[changes]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[checkout-pr]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[churn]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[clone-subset]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[comma]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[conflicts]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[copy-branch-name]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[credit]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[current-branch]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[cut-branch]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[delete-local-merged]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[delete-merged-branches]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[delete-tag]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[diff-last]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[divergence]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[edit-conflicts]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[find-dirty]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[flush]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[force-mtimes]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[forest]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[functionlog]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[git]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[github-open]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[gitlab-mr]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[history-graph]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[ignored]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[improved-merge]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[incoming]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[lines]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[ls-object-refs]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[maildiff]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[maxpack]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[move-commits]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[neck]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[nuke]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[object-deflate]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[outgoing]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[overwritten]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[pie-ify]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[plotrepo]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[promote]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[prune-branches]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[pruneall]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[publish]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[purge-from-history]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[pylint]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rank-contributors]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rebase-authors]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rebase-theirs]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[recently-checkedout-branches]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[ref-recent]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rel]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[remote-default-branch]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[related]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rename-branches]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[reset-with-fire]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[restore-mtime]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[rm-deleted-from-repo]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[root-directory]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[run-command-on-revisions]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[shamend]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[show-overwritten]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[shrink-repo]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[sp]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[sr]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[switch-branch]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[submodule-rm]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[tag-and-sign]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[thanks]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[track]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[trail]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[undelete]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[undo-push]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[unpushed]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[unreleased]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[up]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[upstream-sync]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[what-the-hell-just-happened]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[when-merged]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[where]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[whoami]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[winner]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[wordiness]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[wtf]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[ahead-of-master]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[fetch-pull-requests]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[roots]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[work-in-progress]: https://github.com/unixorn/git-extra-commands/blob/master/README.md
[alias]: https://github.com/tj/git-extras/blob/master/Commands.md#git-alias
[archive-file]: https://github.com/tj/git-extras/blob/master/Commands.md#git-archive-file
[authors]: https://github.com/tj/git-extras/blob/master/Commands.md#git-authors
[browse]: https://github.com/tj/git-extras/blob/master/Commands.md#git-browse
[brv]: https://github.com/tj/git-extras/blob/master/Commands.md#git-brv
[bulk]: https://github.com/tj/git-extras/blob/master/Commands.md#git-bulk
[changelog]: https://github.com/tj/git-extras/blob/master/Commands.md#git-changelog
[clear-soft]: https://github.com/tj/git-extras/blob/master/Commands.md#git-clear-soft
[clear]: https://github.com/tj/git-extras/blob/master/Commands.md#git-clear
[coauthor]: https://github.com/tj/git-extras/blob/master/Commands.md#git-coauthor
[commits-since]: https://github.com/tj/git-extras/blob/master/Commands.md#git-commits-since
[contrib]: https://github.com/tj/git-extras/blob/master/Commands.md#git-contrib
[count]: https://github.com/tj/git-extras/blob/master/Commands.md#git-count
[cp]: https://github.com/tj/git-extras/blob/master/Commands.md#git-cp
[create-branch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-create-branch
[delete-branch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-branch
[delete-merged-branches]: https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-merged-branches
[delete-submodule]: https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-submodule
[delete-tag]: https://github.com/tj/git-extras/blob/master/Commands.md#git-delete-tag
[delta]: https://github.com/tj/git-extras/blob/master/Commands.md#git-delta
[effort]: https://github.com/tj/git-extras/blob/master/Commands.md#git-effort
[feature]: https://github.com/tj/git-extras/blob/master/Commands.md#git-feature
[force-clone]: https://github.com/tj/git-extras/blob/master/Commands.md#git-force-clone
[fork]: https://github.com/tj/git-extras/blob/master/Commands.md#git-fork
[fresh-branch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-fresh-branch
[gh-pages]: https://github.com/tj/git-extras/blob/master/Commands.md#git-gh-pages
[graft]: https://github.com/tj/git-extras/blob/master/Commands.md#git-graft
[guilt]: https://github.com/tj/git-extras/blob/master/Commands.md#git-guilt
[ignore-io]: https://github.com/tj/git-extras/blob/master/Commands.md#git-ignore-io
[ignore]: https://github.com/tj/git-extras/blob/master/Commands.md#git-ignore
[info]: https://github.com/tj/git-extras/blob/master/Commands.md#git-info
[local-commits]: https://github.com/tj/git-extras/blob/master/Commands.md#git-local-commits
[lock]: https://github.com/tj/git-extras/blob/master/Commands.md#git-lock
[locked]: https://github.com/tj/git-extras/blob/master/Commands.md#git-locked
[merge-into]: https://github.com/tj/git-extras/blob/master/Commands.md#git-merge-into
[merge-repo]: https://github.com/tj/git-extras/blob/master/Commands.md#git-merge-repo
[missing]: https://github.com/tj/git-extras/blob/master/Commands.md#git-missing
[mr]: https://github.com/tj/git-extras/blob/master/Commands.md#git-mr
[obliterate]: https://github.com/tj/git-extras/blob/master/Commands.md#git-obliterate
[paste]: https://github.com/tj/git-extras/blob/master/Commands.md#git-paste
[pr]: https://github.com/tj/git-extras/blob/master/Commands.md#git-pr
[psykorebase]: https://github.com/tj/git-extras/blob/master/Commands.md#git-psykorebase
[pull-request]: https://github.com/tj/git-extras/blob/master/Commands.md#git-pull-request
[reauthor]: https://github.com/tj/git-extras/blob/master/Commands.md#git-reauthor
[rebase-patch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-rebase-patch
[release]: https://github.com/tj/git-extras/blob/master/Commands.md#git-release
[rename-branch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-rename-branch
[rename-remote]: https://github.com/tj/git-extras/blob/master/Commands.md#git-rename-remote
[rename-tag]: https://github.com/tj/git-extras/blob/master/Commands.md#git-rename-tag
[repl]: https://github.com/tj/git-extras/blob/master/Commands.md#git-repl
[reset-file]: https://github.com/tj/git-extras/blob/master/Commands.md#git-reset-file
[root]: https://github.com/tj/git-extras/blob/master/Commands.md#git-root
[scp]: https://github.com/tj/git-extras/blob/master/Commands.md#git-scp
[sed]: https://github.com/tj/git-extras/blob/master/Commands.md#git-sed
[setup]: https://github.com/tj/git-extras/blob/master/Commands.md#git-setup
[show-merged-branches]: https://github.com/tj/git-extras/blob/master/Commands.md#git-show-merged-branches
[show-tree]: https://github.com/tj/git-extras/blob/master/Commands.md#git-show-tree
[show-unmerged-branches]: https://github.com/tj/git-extras/blob/master/Commands.md#git-show-unmerged-branches
[squash]: https://github.com/tj/git-extras/blob/master/Commands.md#git-squash
[stamp]: https://github.com/tj/git-extras/blob/master/Commands.md#git-stamp
[standup]: https://github.com/tj/git-extras/blob/master/Commands.md#git-standup
[summary]: https://github.com/tj/git-extras/blob/master/Commands.md#git-summary
[sync]: https://github.com/tj/git-extras/blob/master/Commands.md#git-sync
[touch]: https://github.com/tj/git-extras/blob/master/Commands.md#git-touch
[undo]: https://github.com/tj/git-extras/blob/master/Commands.md#git-undo
[unlock]: https://github.com/tj/git-extras/blob/master/Commands.md#git-unlock
[utimes]: https://github.com/tj/git-extras/blob/master/Commands.md#git-utimes
[add-submodule]: https://github.com/nodef/extra-git/wiki/add-submodule
[apush-submodules]: https://github.com/nodef/extra-git/wiki/apush-submodules
[apush]: https://github.com/nodef/extra-git/wiki/apush
[cpush-submodules]: https://github.com/nodef/extra-git/wiki/cpush-submodules
[cpush]: https://github.com/nodef/extra-git/wiki/cpush
[help]: https://github.com/nodef/extra-git/wiki/help
[init-submodules]: https://github.com/nodef/extra-git/wiki/init-submodules
[name]: https://github.com/nodef/extra-git/wiki/name
[url]: https://github.com/nodef/extra-git/wiki/url
[xclone]: https://github.com/nodef/extra-git/wiki/xclone
