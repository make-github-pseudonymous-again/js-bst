[@aureooms/js-bst](https://aureooms.github.io/js-bst)
==

<img src="https://cdn.rawgit.com/aureooms/js-bst/master/media/sketch.png" width="864">

Binary search tree data structure library for JavaScript.
See [docs](https://aureooms.github.io/js-bst).
Parent is [@aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

```js
let tree = new SplayTree( compare.increasing ) ;
tree.add( 58786 ) ;
tree.find( 58787 ) ; // NIL
tree.find( 58786 ) ; // BINGO
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-bst.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-bst/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-bst.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bst)
[![Build Status](http://img.shields.io/travis/aureooms/js-bst.svg?style=flat)](https://travis-ci.org/aureooms/js-bst)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-bst.svg?style=flat)](https://coveralls.io/r/aureooms/js-bst)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-bst.svg?style=flat)](https://david-dm.org/aureooms/js-bst#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-bst.svg?style=flat)](https://david-dm.org/aureooms/js-bst#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-bst.svg?style=flat)](https://codeclimate.com/github/aureooms/js-bst)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-bst.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bst)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-bst.svg?style=flat)](https://github.com/aureooms/js-bst/issues)
[![Documentation](https://aureooms.github.io/js-bst/badge.svg)](https://aureooms.github.io/js-bst/source.html)

## Children

  - [x] [@aureooms/js-red-black-tree](https://github.com/aureooms/js-red-black-tree)
  - [x] Splay tree
  - [ ] AVL tree
  - [ ] 2-3 tree
  - [ ] AA tree
  - [ ] Scapegoat tree
  - [ ] Treap

## Reference

  - https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree#Implementations
  - http://opendatastructures.org/ods-java/7_Random_Binary_Search_Tree.html
  - https://github.com/mikolalysenko/functional-red-black-tree
