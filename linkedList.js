/*
Pseudoclassical linked list.
Includes "addToTail", "removeHead", and "contains."
 */

var LinkedList = function(){
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.makeNode = function(value){
  var node = {
    value: value,
    next: null
  }
  return node;
}

LinkedList.prototype.addToTail = function(value){
  var newNode = this.makeNode(value);
  if(!this.head){
    this.head = newNode;
  }
  if(this.tail){
    this.tail.next = newNode;
  }
  this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
  if(this.head){
    var result = this.head.value;
    this.head = this.head.next;
    if(!this.head) this.tail = null;
  }
  return result || null;
}

LinkedList.prototype.contains = function(value){
  var checkVal = function(node){
    if(!node) return false;
    if(node.value === value) return true;
    return checkVal(node.next);
  }
  return checkVal(this.head);
}
