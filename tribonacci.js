// Tribonacci
// Fibonacci sequence except it adds the last three numbers together.
// Takes a signature (the first three in the sequence), and a total number of elements expected in the return array.

function tribonacci(signature, n){
  var recurse = function(s){
    if (s.length < n){
      s.push(s[s.length-3] + s[s.length-2] + s[s.length-1]);
      return recurse(s);
    } else {
      return s.slice(0, n);
    }
  }
  return recurse(signature);
}