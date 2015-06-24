//Check to see if all leaves of a binary tree are at the same level.

var Node = function(value, left, right){
  this.value = value;
  this.left = left || undefined;
  this.right = right || undefined;
}

Node.prototype.getLeft = function(){
  return this.left;
}

Node.prototype.getRight = function(){
  return this.right;
}

var allLeavesAtSameLevel = function(node) {
  var flag = null;

  var findLeaf = function(node, depth){
    if(!node) return true;
    if(!node.left && !node.right){
      if(!flag) flag = depth;
      return depth === flag;
    }
    return findLeaf(node.left, depth + 1) &&
           findLeaf(node.right, depth + 1);
  }
  return findLeaf(node, 1);
}
