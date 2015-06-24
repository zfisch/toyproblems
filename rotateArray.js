// Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.
// If n is greater than 0 it should rotate the array to the right.
// If n is less than 0 it should rotate the array to the left.
// If n is 0, then it should return the array unchanged.

var rotate = function(array, n){
  n = n % array.length;
  return n > 0 ? array.splice(array.length-n, n).concat(array) : array.concat(array.splice(0, -1*n));
}