# JavaScript Polyfills

A collection of custom implementations of common JavaScript methods and features, demonstrating how these methods work under the hood.

## Overview

This project provides polyfill implementations for fundamental JavaScript features:

- **myMap** - Transforms each element in an array using a callback function
- **myFilter** - Creates a new array with elements that pass a test
- **myReduce** - Reduces an array to a single value by applying a function to each element

All implementations follow the same behavior and API as their native JavaScript counterparts. This structure can be extended with additional polyfills for any JavaScript features or methods.

## Methods

### `Array.prototype.myMap(callBackFn)`

Executes a function on each element of the array and returns a new array with the transformed elements.

```javascript
const num = [10, 20, 40];
const doubled = num.myMap((x) => x * 2);
// Result: [20, 40, 80]
```

**Parameters:**

- `callBackFn(element, index, array)` - Function to execute on each element

**Returns:** A new array with transformed elements

---

### `Array.prototype.myFilter(callBackFn)`

Creates a new array containing only the elements that satisfy the test function.

```javascript
const num = [10, 20, 40];
const filtered = num.myFilter((element) => element >= 20);
// Result: [20, 40]
```

**Parameters:**

- `callBackFn(element, index, array)` - Function that returns `true` to keep the element

**Returns:** A new array with filtered elements

---

### `Array.prototype.myReduce(callBackFn, initialValue)`

Reduces the array to a single value by applying a function that accepts an accumulator and each element.

```javascript
const num = [10, 20, 40];
const sum = num.myReduce((accumulator, num) => {
  return accumulator + num;
}, 0);
// Result: 70
```

**Parameters:**

- `callBackFn(accumulator, element, index, array)` - Function to execute on each element
- `initialValue` - Initial value for the accumulator

**Returns:** The final accumulated value

---

## Usage

### Running Individual Files

Each file includes test examples at the bottom. Run them directly with Node.js:

```bash
node myMap.js
node myFilter.js
node myReduce.js
```

Or run all tests at once:

```bash
node test-all.js
```

### Importing in Your Project

Include any of the polyfill files in your project:

```javascript
// In your file
require('./myMap');
require('./myFilter');
require('./myReduce');

// Now use them
const arr = [1, 2, 3];
const result = arr.myMap((x) => x * 2);
```

## Project Structure

```
polyfills/
├── myMap.js       # Custom map implementation
├── myFilter.js    # Custom filter implementation
├── myReduce.js    # Custom reduce implementation
├── test-all.js    # Test suite for all polyfills
├── package.json   # Project metadata
├── README.md      # This file
└── .gitignore     # Git ignore patterns
```

Extend this structure by adding more polyfill files as needed for your project.

## Learning Purpose

These implementations are educational tools to understand how array methods work internally. They demonstrate:

- How to iterate over arrays
- Working with callback functions
- Accumulating values (reduce pattern)
- Array transformation patterns
- Callback parameter passing

## Extending This Project

To add more polyfills:

1. Create a new `.js` file for your polyfill (e.g., `myFind.js`)
2. Implement the feature with examples and tests
3. Add it to `test-all.js` for comprehensive testing
4. Update this README with documentation

## Notes

- These are polyfills for learning purposes and not recommended for production use
- Modern JavaScript provides optimized native implementations of these methods
- Each implementation maintains the same callback signature and behavior as the native methods

## Author

Created as part of JavaScript assignments for WebCohort26
