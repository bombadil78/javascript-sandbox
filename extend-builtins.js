var b = new Boolean(true);
console.log(b);

Boolean.prototype.myToString = function() {
    return "I am a boolean: " + this.valueOf();
}
Boolean.prototype.toString = function() {
    return "Fixed toString (" + this.myToString() + ")";
}
console.log(b);
console.log("Introduce new methods on builtin objects");
console.log(b.myToString());
console.log("Override existing methods on builtin objects");
console.log(b.toString());

console.log("fun with eval()")
eval("console.log('hello world');");
var x = {
    "name": "x"
};
eval("console.log(x);");