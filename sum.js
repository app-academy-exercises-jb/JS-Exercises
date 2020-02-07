const sum = function sum() {
  total = 0;

  for (let n in arguments) {
    total += arguments[n];
  }

  return total;
};


const restSum = function restSum(...args) {
  return args.reduce((memo, ele) => memo + ele);
};

console.log(restSum(1,2,3))