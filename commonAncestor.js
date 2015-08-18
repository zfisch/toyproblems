var Tree = function(value) {

  this.value = value || null;
  this.left = null;
  this.right = null;

  this.addLeft = function(value){
    this.left = new Tree(value);
  };

  this.addRight = function(value){
    this.right = new Tree(value);
  };

  this.containsValue = function(value){
    if (this.value === value) return true;
    if (!this.left && !this.right) return false;
    if (!this.left) return this.right.containsValue(value);
    if (!this.right) return this.left.containsValue(value);
    return this.left.containsValue(value) || this.right.containsValue(value);
  };

  this.onLeft = function(value){
    return this.left === value || this.left.containsValue(value);
  };

  this.onRight = function(value){
    return this.right === value || this.right.containsValue(value);
  };

  this.commonAncestor = function(v1, v2, containsValues){

    if (!( this.containsValue(v1) && this.containsValue(v2) )) {
      if(!this.containsValues) {
        throw "tree does not contain both values!"
      } else {
        return false;
      }
    }

    if ((this.onLeft(v1) && this.onRight(v2)) ||
        (this.onLeft(v2) && this.onRight(v1)))
          return this;

    return this.left.commonAncestor(v1, v2, true) ||
           this.right.commonAncestor(v1, v2, true);
  };

}


