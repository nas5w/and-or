![andor.js](https://i.imgur.com/WpbdNXS.png)

[![Build Status](https://travis-ci.org/nas5w/and-or.svg?branch=master)](https://travis-ci.org/nas5w/and-or) [![Codecov Status](https://codecov.io/gh/nas5w/and-or/branch/master/graph/badge.svg)](https://codecov.io/gh/nas5w/and-or/branch/master) [![Package Size](https://img.shields.io/bundlephobia/min/andor.js.svg?style=flat)](hhttps://img.shields.io/bundlephobia/min/andor.js.svg?style=flat)

Easy javascript logic tests.

## :rocket: Example Use

`andor.js` can be used to nest your `and` and `or` logic any number of levels deep, as complex as your heart desires.

### requirejs

```javascript
const { and, or } = require("andor.js");

const test1 = and(true, true, or(true, false, true), true);
console.log(test1);
// true

const test2 = and(true, true, or(true, false, true), false);
console.log(test2);
// false
```

### es6 modules

```javascript
import { and, or } from "andor.js";

const test1 = and(true, true, or(true, false, true), true);
console.log(test1);
// true

const test2 = and(true, true, or(true, false, true), false);
console.log(test2);
// false
```

# The MIT License (MIT)

Copyright © 2019 Nick Scialli

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
