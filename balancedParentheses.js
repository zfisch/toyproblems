// BALANCED PARENTHESES //
// write a function that takes a string of text and returns true if
// the parentheses are balanced and false otherwise.

var balancedParens = function(input){
  var stack = [];

  var pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };

  var closerParens = {
    ')' : true,
    ']' : true,
    '}' : true
  };

  //add all opening parens to a stack, if you see a closerParen, make sure
  //it matches the last opening paren
  for (var i=0; i<input.length; i++){
    if (pairs[input[i]]) stack.push(input[i]);
    if (closerParens[input[i]]){
      var closer = pairs[stack[stack.length-1]] === input[i] ? stack.pop() : false;
      if(!closer) return false
    }
  }

  //if there are any opening parens left in the stack, it's false
  var result = stack.length === 0 ? true : false;
  return result;
}

