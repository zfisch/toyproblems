/*
Prototypal tree with addChild and contains methods.
*/

var treeMaker = function(value){
  var tree = Object.create(treeMethods);
  tree._value = value;
  tree._children = [];
  return tree;
};

treeMethods = {};

treeMethods.addChild = function(value){
  this._children.push(treeMaker(value));
};

treeMethods.contains = function(value){
  if(this._value === value) return true;
  if(this._children.length > 0){
    return this._children.some(function(child){
      return child.contains(value);
    });
  } else {
    return false;
  }
};
