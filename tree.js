  var Tree = function(value) {
    this.value = value;
    this.children = [];
  };

  Tree.prototype.addChild = function(value) {
    var child = new Tree(value);
    this.children.push(child);
    return child;
  };

  //Returns a flat array of tree values for which the filterFn is true.
  //Happens in breadth-first order.
  Tree.prototype.BFSelect = function(filterFn) {
    debugger;
    var results = [];
    var q = new Queue();
    q.enqueue(this);

    while (q.size > q.first) {
      var curr = q.dequeue();
      if (filterFn(curr.value)) {
        results.push(curr.value)
      }
      curr.children.forEach(function(child){
        q.enqueue(child);
      });
    }

    return results;
  };

  Tree.prototype.dfSelect = function(filterFn) {
    var results = [];

    var traverse = function(tree){
      if(filterFn(tree.value)) results.push(tree.value);
      if(tree.children.length > 0){
        tree.children.forEach(function(child){
          traverse(child);
        });
      }
    }

    this.traverse(this);
    return results;
  }


  Tree.prototype.dfSelect = function(filterFn) {
    if(filterFn(this.value)) console.log(this.value);
    if(this.children.length > 0) {
      this.children.forEach(function(child){
        child.dfSelect(filterFn);
      });
    }
  }

  Tree.prototype.map = function(mappingFunction) {

    var newTree = new Tree(mappingFunction(this.value));

    var mapNode = function(oldNode, newNode) {
      oldNode.children.forEach(function(child) {
        var nodeChild = newNode.addChild(mappingFunction(child.value));
        mapNode(child, nodeChild);
      });
    }

    mapNode(this, newTree);
    return newTree;
  }

  Tree.prototype.mapInPlace = function(mappingFunction) {
    this.value = mappingFunction(this.value);
    this.children.forEach(function(child) {
      child.mapInPlace(mappingFunction);
    });
  };


  var Queue = function() {
    this.storage = {};
    this.size = 0;
    this.first = 0;
  }

  Queue.prototype.enqueue = function(value) {
    this.storage[this.size] = value;
    this.size++;
  }

  Queue.prototype.dequeue = function() {
    if(this.size > this.first){
      var result = this.storage[this.first];
      delete this.storage[this.first];
      this.first++;
      return result;
    } else {
      return null;
    }
  };


var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);
var tree = root1;