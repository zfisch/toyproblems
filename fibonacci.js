/*
  Fibonacci:
  0 1 1 2 3 5 8 13 etc.
*/


//Recursive
//Time complexity: 2^n
var nthFibonacci = function(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  return nthFibonacci(n-1) + nthFibonacci(n-2);
}

//Iterative
var nthFibonacci = function(n) {
  if (n < 0) return null;
  if (n < 2) return n;
  var prev = 0;
  var curr = 1;
  var result;
  while (n > 1){
    result = prev + curr;
    prev = curr;
    curr = result;
    n--;
  }
  return result;
}

//To make the functions faster, memoize them and store results in a hash for constant time lookup!
var memoize = function(fn) {
  var hash = {};
  var newFn = function(arg) {
    if (!hash.hasOwnProperty(arg)) hash[arg] = fn.call(null, arg);
    return hash[arg];
  }
  return newFn;
}
