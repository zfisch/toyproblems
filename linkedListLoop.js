var LinkedList = function(){
  this.head = null;
  this.tail = null;

  this.makeNode = function(value){
    return {
      value: value,
      next: null
    };
  },

  this.push = function(value){
    var newNode = this.makeNode(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  },

  // this.hasLoop = function(){
  //   if(this.)
  // }

}
