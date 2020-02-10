Function.prototype.curry = function (n) {
  let method = this,
    slice = Array.prototype.slice,
    args = slice.apply(arguments, [1]);

  if (arguments.length < n + 1) {
    return function () {
      return method.curry(n, 
        ...args.concat(slice.apply(arguments, [0])));
    }
  } else {
    return method(...args);//method.apply(method, args);
  };
};

const _curriedSum = function (n) {
  curriedN = function(...args) {
    return args.reduce(function(memo, ele) {return memo + ele} )
  };

  return curriedN.curry(n);
}


const sumThree = _curriedSum(3);
const sum = _curriedSum(4);
sum(4)(4)(4)(4); //=> 16