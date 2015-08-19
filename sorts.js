
//Basic bubble sort algorithm.
var bubbleSort = function(arr) {
  var curr;
  var next;
  var swapped = false;

  for (var i=0; i<arr.length+1; i++) {
    curr = arr[i];
    next = arr[i+1];
    if (curr > next){
      arr[i] = next;
      arr[i+1] = curr;
      swapped = true;
    }
  }

  return swapped ? bubbleSort(arr) : arr;
}

//Merges two sorted arrays into a single sorted array. Useful for mergesort.
var merge = function(arr1, arr2) {
  var result = [];
  var l = 0;
  var r = 0;
  while (l < arr1.length || r < arr2.length) {
    if (arr1.length === l) {
      result.push(arr2[r++]);
    } else if (arr2.length === r) {
      result.push(arr1[l++])
    } else if (arr1[l] < arr2[r]) {
      result.push(arr1[l++]);
    } else {
      result.push(arr2[r++]);
    }
  }
  return result
}

//Sorts an array in n*log(n) time
var mergeSort = function(arr) {
  if (arr.length < 2){
    return arr;
  }

  var left = arr.slice(0, arr.length/2);
  var right = arr.slice(arr.length/2, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}



