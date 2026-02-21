Array.prototype.myMap = function (callBackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    result.push(callBackFn(element, i, this));
  }
  return result;
};

const num = [10, 20, 40];
console.log(num.myMap((x) => x * 2));
