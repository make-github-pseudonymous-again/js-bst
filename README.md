:seedling: [@aureooms/js-bst](https://aureooms.github.io/js-bst)
==

<img src="https://ipfs.io/ipfs/QmV3bHSMRbNYydNxpyuke659Nj89UsVcuSyZXibogw4sJ9" width="864">

Binary search tree data structure library for JavaScript.
See [docs](https://aureooms.github.io/js-bst).
Parent is [@aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

```js
let tree = new SplayTree( compare.increasing ) ;
tree.add( 58786 ) ;
tree.find( 58787 ) ; // NIL
tree.find( 58786 ) ; // BINGO
```

[![License](https://img.shields.io/github/license/aureooms/js-bst.svg)](https://raw.githubusercontent.com/aureooms/js-bst/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-bst.svg)](https://www.npmjs.org/package/@aureooms/js-bst)
[![Build](https://img.shields.io/travis/aureooms/js-bst/main.svg)](https://travis-ci.org/aureooms/js-bst/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-bst.svg)](https://david-dm.org/aureooms/js-bst)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-bst.svg)](https://david-dm.org/aureooms/js-bst?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-bst.svg)](https://github.com/aureooms/js-bst/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-bst.svg)](https://www.npmjs.org/package/@aureooms/js-bst)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-bst.svg)](https://codeclimate.com/github/aureooms/js-bst/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-bst.svg)](https://codeclimate.com/github/aureooms/js-bst/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-bst/main.svg)](https://codecov.io/gh/aureooms/js-bst)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-bst.svg)](https://codeclimate.com/github/aureooms/js-bst/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-bst/badge.svg)](https://aureooms.github.io/js-bst/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-bst)](https://bundlephobia.com/result?p=@aureooms/js-bst)

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
