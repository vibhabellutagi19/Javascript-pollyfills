Array.prototype.myFilter = function (callBackFn) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (callBackFn(element, i, this)) {
      result.push(element);
    }
  }

  return result;
};

const num = [10, 20, 40];
console.log(num.myFilter((element) => element >= 20));
