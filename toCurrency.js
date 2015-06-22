//toCurrency
// Integer in currency format is expressed by a string of number where every three characters are separated by comma.
// Ex. 123456 -> "123,456"
// Input will always be an positive integer, so don't worry about type checking or negative/float values.

function toCurrency(price){
  var s = String(price);
  var result = '';
  for(var i=s.length-1, j=0; i>=0; i--, j++){
    if(j % 3 === 0 && j !== 0){
      j=0;
      result = ',' + result;
    }
    result = s[i] + result;
  }
  return result;
}