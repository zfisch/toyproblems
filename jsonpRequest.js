/*
Example of a vanilla JS jsonpRequest
The callback passed to this function will be called on the response data.
For example, if this was a proper endpoint, it would log the response data:
  jsonpRequest('http://example.com', function(data) {
    console.log(data)
  });

*/

var jsonpRequest = function(url, callback) {
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url + '?callback=(' + callback + ')';
  document.getElementsByTagName('head')[0].appendChild(script);
};
