Array.prototype.myFlat = function (depth) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!Array.isArray(element) || depth === 0) {
      result.push(element);
    } else {
      result.push(...element.myFlat(depth - 1));
    }
  }
  return result;
};

const array = [1, [2, 3], [4, [5, 6]]];
console.log(array.myFlat(1)); // [1, 2, 3, 4, [5, 6]]

const array2 = [1, [2, 3], [4, [5, 6]]];
console.log(array2.myFlat(2)); // [ 1, 2, 3, 4, 5, 6 ]
