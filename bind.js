Function.prototype.myBind = function(that) {
  let method = this,
    args = Array.from(arguments).slice(1);

  return function () {
    return method.apply(that, 
      args.concat(slice.apply(arguments, [0])));
  };
};


Function.prototype.restBind = function(...args) {
  let method = this,
    that = args[0],
    bindArgs = args.slice(1);

  return function (...runtimeArgs) {
    return method.apply(that, 
      bindArgs.concat(runtimeArgs));
  };
}