[js-bst](http://aureooms.github.io/js-bst)
==

Binary search tree code bricks in JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-bst.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-bst/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-bst.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bst)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-bst.svg?style=flat)](http://bower.io/search/?q=aureooms-js-bst)
[![Build Status](http://img.shields.io/travis/aureooms/js-bst.svg?style=flat)](https://travis-ci.org/aureooms/js-bst)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-bst.svg?style=flat)](https://coveralls.io/r/aureooms/js-bst)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-bst.svg?style=flat)](https://david-dm.org/aureooms/js-bst#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-bst.svg?style=flat)](https://david-dm.org/aureooms/js-bst#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-bst.svg?style=flat)](https://codeclimate.com/github/aureooms/js-bst)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-bst.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-bst)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-bst.svg?style=flat)](https://github.com/aureooms/js-bst/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-bst.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-bst)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-bst
# or
jspm install npm:aureooms-js-bst
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-bst
```

### bower
```terminal
bower install aureooms-js-bst
```

### ender
```terminal
ender add aureooms-js-bst
```

### jam
```terminal
jam install aureooms-js-bst
```

### spm
```terminal
spm install aureooms-js-bst --save
```

### npm
```terminal
npm install aureooms-js-bst --save
```

## Require
### jspm
```js
let bst = require( "github:aureooms/js-bst" ) ;
// or
import bst from 'aureooms-js-bst' ;
```
### duo
```js
let bst = require( "aureooms/js-bst" ) ;
```

### component, ender, spm, npm
```js
let bst = require( "aureooms-js-bst" ) ;
```

### bower
The script tag exposes the global variable `bst`.
```html
<script src="bower_components/aureooms-js-bst/js/dist/bst.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-bst" ] , function ( bst ) { ... } ) ;
```

## Reference

  - https://en.wikipedia.org/wiki/Self-balancing_binary_search_tree#Implementations
  - http://opendatastructures.org/ods-java/7_Random_Binary_Search_Tree.html
