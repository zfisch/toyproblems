//Given a list lst and a number N, create a new list that contains each number of lst at most N times
//without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2]
//drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3,
//which leads to [1,2,3,1,2,3].

var deleteNth = function(array, n){
  var obj = {};
  return array.filter(function(num){
    obj[num] = (obj[num] || 0) + 1;
    return obj[num] <= n;
  });
}
