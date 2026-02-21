// Load all polyfills
require('./myMap');
require('./myFilter');
require('./myReduce');

console.log('='.repeat(50));
console.log('ARRAY POLYFILLS - TEST SUITE');
console.log('='.repeat(50));

// Test data
const num = [10, 20, 40];

// Test myMap
console.log('\n✓ Testing myMap:');
console.log('Input:', num);
console.log(
  'Result (x * 2):',
  num.myMap((x) => x * 2),
);

// Test myFilter
console.log('\n✓ Testing myFilter:');
console.log('Input:', num);
console.log(
  'Result (element >= 20):',
  num.myFilter((element) => element >= 20),
);

// Test myReduce
console.log('\n✓ Testing myReduce:');
console.log('Input:', num);
console.log(
  'Result (sum):',
  num.myReduce((accumulator, num) => {
    return accumulator + num;
  }, 0),
);

// Additional test cases
console.log('\n' + '='.repeat(50));
console.log('ADDITIONAL TEST CASES');
console.log('='.repeat(50));

const numbers = [1, 2, 3, 4, 5];

console.log('\n✓ Map - Square each number:');
console.log('Input:', numbers);
console.log(
  'Result:',
  numbers.myMap((x) => x ** 2),
);

console.log('\n✓ Filter - Even numbers only:');
console.log('Input:', numbers);
console.log(
  'Result:',
  numbers.myFilter((x) => x % 2 === 0),
);

console.log('\n✓ Reduce - Product of all numbers:');
console.log('Input:', numbers);
console.log(
  'Result:',
  numbers.myReduce((acc, x) => acc * x, 1),
);

console.log('\n' + '='.repeat(50));
console.log('All tests completed successfully!');
console.log('='.repeat(50));
