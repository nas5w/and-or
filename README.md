# and-or

[![Build Status](https://travis-ci.org/nas5w/and-or.svg?branch=master)](https://travis-ci.org/nas5w/and-or) [![Codecov Status](https://codecov.io/gh/nas5w/and-or/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/and-or/branch/master)

Easy javascript logic tests.

## Example Use

### requirejs

```javascript
const { and, or } = require("and-or");

const test1 = and(true, true, or(true, false, true), true);
console.log(test1);
// true

const test2 = and(true, true, or(true, false, true), false);
console.log(test2);
// false
```

### es6 modules

```javascript
import { and, or } from "and-or";

const test1 = and(true, true, or(true, false, true), true);
console.log(test1);
// true

const test2 = and(true, true, or(true, false, true), false);
console.log(test2);
// false
```
