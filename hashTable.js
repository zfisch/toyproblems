//Hashtable with insert, retrieve, and remove.
//Handles collisions.

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuple = [key, value];
    var bucket = storage[index];
    var updatedTuple = false;
    if (bucket === undefined) {
      storage[index] = [tuple];
    } else {
      for (var i=0; i<bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          updatedTuple = true;
        }
      }
      if (!updatedTuple) bucket.push(tuple);
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket === undefined) return null;
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) return bucket[i][1];
    }
    return null;
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    if (bucket === undefined) return null;
    for (var i=0; i<bucket.length; i++) {
      if (bucket[i][0] === key) return bucket.splice(i, 1);
    }
    return null;
  };

  return result;
};

// Hashing Function
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


