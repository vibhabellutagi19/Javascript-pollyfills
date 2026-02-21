Array.prototype.myForEach = function (callBackFn) {
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    callBackFn(element, i, this);
  }
};

const num = [10, 20, 40];
num.myForEach((x) => console.log(x));
