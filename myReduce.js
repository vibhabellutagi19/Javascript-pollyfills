Array.prototype.myReduce = function (callBackFn, initialValue) {
  let accumulator = initialValue;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    accumulator = callBackFn(accumulator, element, index, this);
  }

  return accumulator;
};

const num = [10, 20, 40];
console.log(
  num.myReduce((accumulator, num) => {
    return accumulator + num;
  }, 0),
);
