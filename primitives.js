console.log("Boolean");
console.log("The value ...");
var b = false;
console.log(b);
console.log("... and the object wrapper");
var bb = new Boolean(false);
console.log(bb);

if (bb) {
    console.log("bb is truthy, ");
    console.log("but bb's value is " + bb.valueOf());
    console.log("wtf...");
}

var s = "s";
console.log("The value ...");
console.log(s);
console.log("... and the object wrapper");
var ss = new String("s");
console.log(ss);

console.log("Bottom line: no need to use the object wrappers");