// Implement a Queue using 2 stacks with enqueue and dequeue methods.

var Queue = function(){
  this.stack1 = [];
  this.stack2 = [];

  this.enqueue = function(num){
    this.stack1.push(num);
  }

  this.dequeue = function(){
    if(this.stack2.length === 0){
      while(this.stack1.length > 0){
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
