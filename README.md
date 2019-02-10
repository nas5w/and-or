# and-or

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
