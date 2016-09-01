console.log("GENERAL METHODS TO CALL A FUNCTION");

console.log("function method");
var myFunction = function() {
    console.log("myFunction() called");
}
// is equivalent to: function myFunction() { ... }

myFunction();

console.log("method method");
var obj = new Object();
obj.myMethod = function() {
    console.log("myMethod() called");
}
obj.myMethod();

console.log("constructor method");
var obj = new myFunction();
console.log("created a new object");
console.log(obj);

console.log("constructor method can be used to initialize objects");
var MyObject = function() {
    this.name = "some new object name";
    this.printName = function() {
        console.log("My name is " + this.name);
    }
}
var obj = new MyObject();
console.log(obj);
obj.printName();

console.log("apply method");
var myApplyFunction = function() {
    console.log("myApplyFunction");
}
var otherObj = new Object();
myApplyFunction.apply(otherObj);

console.log("MEANING OF THIS");
var someFunction = function() {
    console.log("My name is " + this.name);
}

console.log("in a method this binds to the receiver");
var obj = {
    "name": "obj",
    "printName": someFunction
};
obj.printName();

console.log("in a method this has access to the parent");
var parentObj = {
    "name": "parentObj"
}
var childObj = new Object(parentObj);
childObj.printName = someFunction;
childObj.printName();
childObj.name = "childObj";
childObj.printName();

console.log("in a function this binds to the global object");
someFunction();

console.log("ARGUMENTS OF A FUNCTION ARE ACCESSIBLE");
var myFunction = function(p1, p2, p3) {
    console.log(arguments);
    console.log("length=" + arguments.length);
}
console.log("passing all arguments");
myFunction(1, 2, 3);
console.log("passing not all arguments");
myFunction(1, 2);
console.log("only the passed arguments are stored in arguments");