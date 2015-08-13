//Hashtable with insert, retrieve, and remove.
//Handles collisions and resizes whenever storage gets above 75% or below 25% storage limit.

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  //Flag to tell insert/remove functions to hold size and prevent continuous rehashing during rehash process.
  //During rehash, the size is not incremented or decremented.
  var keepSize = false;

  var checkSize = function() {
    if (size > (0.75 * storageLimit)) {
      var tuples = gatherTuplesAndEmptyStorage();
      storageLimit = (storageLimit * 2);
      rehash(tuples);
    } else if (size < (0.25 * storageLimit)) {
      var tuples = gatherTuplesAndEmptyStorage();
      storageLimit = (storageLimit / 2);
      rehash(tuples);
    }
    console.log(result.getStorageSizeAndSize());
  };

  var rehash = function(tuples) {
    keepSize = true;
    tuples.forEach(function(tuple){
        result.insert(tuple[0], tuple[1]);
    });
    keepSize = false;
  };

  var gatherTuplesAndEmptyStorage = function() {
    var tuples = [];
    storage.forEach(function(bucket){
      bucket.forEach(function(tuple){
        tuples.push(tuple);
      });
    });
    storage = [];
    return tuples;
  };

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var tuple = [key, value];
    var bucket = storage[index];
    var updatedTuple = false;
    if (bucket === undefined) {
      storage[index] = [tuple];
      if (!keepSize) {
        size++;
        checkSize();
      }
    } else {
      for (var i=0; i<bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
          updatedTuple = true;
        }
      }
      if (!updatedTuple) bucket.push(tuple);
      if (!keepSize) {
        size++;
        checkSize();
      }
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
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        if (!keepSize) {
          size--;
          checkSize();
        }
      }
    }
  };

  result.getStorageSizeAndSize = function() {
    return { 'storageLimit': storageLimit, 'size': size };
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


