var http = require("http");
var util= require("util");
var url = require("url");

//var process = require("process");
//console.log(process)
var a = 123;
var cc = function() {
  a = 1;
  b = 2;
}

//console.log(1)

function doSomething(callback) {
  console.log(1);
  var i = 0;
  for (var i = 0; i < 100; i++) {
    j = i / 2;
  }
  console.log(i);
  callback();
  process.nextTick(callback);

  console.log(1111);
}
doSomething(function() {
  console.log(2);
});


http.createServer(function(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('123123213213');
}).listen(3000);
