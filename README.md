# testsuite-js

This repository contains the tests from [the spec
testsuite](https://github.com/WebAssembly/spec/tree/master/ml-proto/test),
converted to JavaScript via
[sexpr-wasm-prototype](https://github.com/WebAssembly/sexpr-wasm-prototype).

## Cloning

This repository depends on the testsuite and sexpr-wasm-prototype repositories,
which are submodules:

```
$ git clone https://github.com/WebAssembly/testsuite-js
$ git submodule update --init
```

## Updating the testsuite

First, update the testsuite and sexpr-wasm-prototype submodules:

```
$ (cd external/sexpr-wasm && git fetch origin && git checkout origin/master)
...
$ (cd external/testsuite && git fetch origin && git checkout origin/master)
...
```

Then run the generator script:

```
$ scripts/generator.sh
...
```

This will display of `assert_invalid error:` messages; those are checked by
sexpr-wasm, and not by JavaScript.

The JavaScript testsuite will be modified; you can review these changes
normally:

```
$ git status

# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	modified:   external/sexpr-wasm (new commits)
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
