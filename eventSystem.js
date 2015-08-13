//Custom event system for .on and .trigger

var mixEvents = function(obj) {

  obj['listeners'] = {};

  obj['on'] = function(eventName, callback){
    obj.listeners[eventName] = callback;
  };

  obj['trigger'] = function(triggerName){
    if (obj.listeners.hasOwnProperty(triggerName)) {
      obj.listeners[triggerName]();
    }
  };

  return obj;
};
