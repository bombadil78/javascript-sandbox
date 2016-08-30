function blocking() {
    console.log("blocking called");
    var i = 0;
    while (i < 10000000000) {
        i++;
    }
    return i;
}

function nonBlocking(callBack) {
    console.log("non-blocking called");
    var i = 0;
    while (i < 10000000000) {
        i++;
    }
    callBack(i);
}

function doSthElse() {
    console.log("do sth else");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("blocking version:");
    var result = blocking();
    console.log("result=" + result);
    doSthElse();

    console.log("non-blocking version:");
    nonBlocking(function(result) {
        console.log("result=" + result);
    });
    doSthElse();


});