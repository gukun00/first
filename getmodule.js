var myModule = require("./module");
var myModule2 = require("./module");

var util = require("util");

//console.log(myModule)

var hello = new myModule();
hello.setName("guk");

var hello1 = new myModule();
hello1.setName("guk2");

//hello.sayHello();
//hello1.sayHello();

console.log(util.inspect(hello,false,null))
