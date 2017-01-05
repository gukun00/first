
var hello = function() {
  var name = "aa";
  var ccc = {};
  this.setName = function(tyName) {
    name = tyName;
  }


  this.sayHello = function() {
    console.log("hello:" + name);
  }
}

module.exports  = hello;
