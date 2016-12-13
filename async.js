function foo() {
    console.log("foo");
}

function bar() {
    console.log("bar");
}

function callback(callback) {
    console.log("callback")
    callback();
}

/*
foo();
setTimeout(foo, 0);
bar();
setTimeout(bar, 0);
*/

callback(function() {
    console.log("#1");
});
callback(function() {
    console.log("#2");
});

callback(() => {
    console.log("no cb #1");
});

callback(() => {
    console.log("no cb #2");
});
