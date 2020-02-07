Function.prototype.myBind = function(that) {
  let method = this,
    slice = Array.prototype.slice,
    args = slice.apply(arguments, [1]);

  return function () {
    return method.apply(that, 
      args.concat(slice.apply(arguments, [0])));
  };
};


Function.prototype.restBind = function(...args) {
  let method = this,
    that = args[0],
    slice = Array.prototype.slice,
    bindArgs = slice.apply(args, [1]);

  return function (...runtimeArgs) {
    return method.apply(that, 
      bindArgs.concat(slice.apply(runtimeArgs, [0])));
  };
}