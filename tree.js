/*
Some experiments with trees. Includes depth-first search, breadth-first search, map, mapinplace, and findMost/findLeast.
 */

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


Tree.prototype.findMost = function(runningTotal, currentMax) {
  runningTotal = runningTotal === undefined ? this.value : runningTotal + this.value;
  currentMax = currentMax || null;

  if (this.children.length === 0) {
    if (currentMax === null || runningTotal > currentMax) {
      currentMax = runningTotal;
    }
  } else {
    for (var i=0; i<this.children.length; i++) {
      currentMax = Math.max(currentMax, this.children[i].findMost(runningTotal, currentMax));
    }
  }

  return currentMax;
}


Tree.prototype.findMost = function(runningTotal, currentMax) {
  runningTotal = runningTotal === undefined ? this.value : runningTotal + this.value;
  currentMax = currentMax || null;

  if (this.children.length === 0) {
    if (currentMax === null || runningTotal > currentMax) {
      currentMax = runningTotal;
    }
  } else {
    this.children.forEach(function(child){
      currentMax = Math.max(currentMax, child.findMost(runningTotal, currentMax));
    }, this);
  }

  return currentMax;
}


Tree.prototype.findLeast = function(runningTotal, currentMin) {
  runningTotal = runningTotal === undefined ? this.value : runningTotal + this.value;
  currentMin = currentMin || Infinity;

  if (this.children.length === 0) {
    if (currentMin === Infinity || runningTotal < currentMin) {
      currentMin = runningTotal;
    }
  } else {
    this.children.forEach(function(child){
      currentMin = Math.min(currentMin, child.findLeast(runningTotal, currentMin));
    }, this);
  }

  return currentMin;
}

Tree.prototype.findMost = function() {
  var result = null;

  var compareResults = function(runningTotal, node) {
    if (node.children.length === 0) {
      result = result === null ? runningTotal : Math.max(result, runningTotal);
    } else {
      node.children.forEach(function(child) {
        compareResults(runningTotal + child.value, child);
      });
    }
  }

  if (this.children.length === 0) {
    return this.value;
  } else {
    this.children.forEach(function(child) {
      compareResults(this.value + child.value, child);
    }, this);
  }

  return result;
}

Tree.prototype.findLeast = function() {
  var result = null;

  var compareResults = function(runningTotal, node) {
    if (node.children.length === 0) {
      result = result === null ? runningTotal : Math.min(result, runningTotal);
    } else {
      node.children.forEach(function(child) {
        compareResults(runningTotal + child.value, child);
      });
    }
  }

  if (this.children.length === 0){
    return this.value;
  } else {
    this.children.forEach(function(child) {
      compareResults(this.value + child.value, child);
    }, this);
  }

  return result;
}

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