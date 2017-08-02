#### Normalizes a value from one range to another.

for example:

A value of 0.7 in the range of -1.0 to 1.0

If we want to know the value normalized to a range of 0 to 99

```javascript

var normalizeRange = require('normalizerange-js');

var value = normalizeRange(0.7, -1.0, 1.0, 0, 99)

```

value equals *84.14999999999999*
