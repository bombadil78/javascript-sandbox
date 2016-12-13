document.addEventListener('DOMContentLoaded', function() {
    console.log(foo()[0]());
    console.log(foo()[1]());
    console.log(foo()[2]());
    console.log(foo()[3]());
    console.log(foo()[4]());
    console.log("closure store outer variables by reference ...");

    console.log(bar()[0]);
    console.log(bar()[1]);
    console.log(bar()[2]);
    console.log(bar()[3]);
    console.log(bar()[4]);
    console.log("... so immediately evaluate function in case value is relevant!")
});

function foo() {
    var data = [];
    for (var i = 0; i < 5; i++) {
        data[i] = function() {
            return i;
        }
    }
    return data;
}

function bar() {
    var data = [];
    for (var i = 0; i < 5; i++) {
        data[i] = (function() {
            return i;
        })();
    }
    return data;
}