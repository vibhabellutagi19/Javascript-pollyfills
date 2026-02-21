# JavaScript Polyfills

A collection of custom implementations of common JavaScript methods and features, demonstrating how these methods work under the hood.

## Overview

This project provides polyfill implementations for common JavaScript array methods (map, filter, reduce, flat, forEach, flatMap). All implementations follow the same behavior and API as their native JavaScript counterparts. This structure can be extended with additional polyfills for any JavaScript features or methods.

## Usage

### Running Individual Files

Each file includes test examples. Run them directly with Node.js:

```bash
node myMap.js
node myFilter.js
node myReduce.js
node myFlat.js
node myForEach.js
node myFlatMap.js
```

Or run all tests at once:

```bash
npm test
```

Or use specific test scripts:

```bash
npm run test:map
npm run test:filter
npm run test:reduce
npm run test:flat
npm run test:forEach
npm run test:flatMap
```

## Project Structure

```
polyfills/
├── myMap.js        # Custom map implementation
├── myFilter.js     # Custom filter implementation
├── myReduce.js     # Custom reduce implementation
├── myFlat.js       # Custom flat implementation
├── myForEach.js    # Custom forEach implementation
├── myFlatMap.js    # Custom flatMap implementation
├── test-all.js     # Test suite for all polyfills
├── package.json    # Project metadata
├── README.md       # This file
└── .gitignore      # Git ignore patterns
```

## Notes

- These are polyfills for learning purposes and not recommended for production use
- Modern JavaScript provides optimized native implementations of these methods
- Each implementation maintains the same callback signature and behavior as the native methods

## Author

Created as part of JavaScript assignments for WebCohort26
