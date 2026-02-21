Array.prototype.myMap = function (callBackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    result.push(callBackFn(element, i, this));
  }
  return result;
};

Array.prototype.myFlat = function (depth) {
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!Array.isArray(element)) {
      result.push(element);
    }
    if (Array.isArray(element) && depth === 0) {
      result.push(element);
    }
    if (Array.isArray(element) && depth > 0) {
      const flattenedArray = element.myFlat(depth - 1);
      flattenedArray.forEach((element) => result.push(element));
    }
  }
  return result;
};

Array.prototype.myFlatMap = function (callBackFn) {
  return this.myMap(callBackFn).myFlat(1);
};

console.log([1, 2, 3].myFlatMap((x) => [x, x * 2]));
