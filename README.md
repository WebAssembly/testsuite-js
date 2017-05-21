# testsuite-js

This repository contains the tests from [the spec
testsuite](https://github.com/WebAssembly/spec/tree/master/interpreter/test),
converted to JavaScript via
[the spec tool](https://github.com/WebAssembly/spec).

## Cloning

This repository depends on the testsuite and spec repositories, which are
submodules:

```
$ git clone https://github.com/WebAssembly/testsuite-js
$ git submodule update --init
```

## Updating the testsuite

First, update the testsuite and spec submodules:

```
$ (cd external/spec && git fetch origin && git checkout origin/master)
...
$ (cd external/testsuite && git fetch origin && git checkout origin/master)
...
```

Then run the generator script:

```
$ scripts/generate.sh
...
```

The JavaScript testsuite will be modified; you can review these changes
normally:

```
$ git status

# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	modified:   external/spec (new commits)
#	modified:   external/testsuite (new commits)
#	modified:   test/conversions.js
#	modified:   test/float_exprs.js
#	modified:   test/float_memory.js
#	modified:   test/float_misc.js
#
no changes added to commit (use "git add" and/or "git commit -a")
```

Make sure to provide a nice git message, with the commit hashes of the updated
repositories.
