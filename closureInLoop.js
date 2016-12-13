function emitVariable(i) {
    console.log("variable=" + i);
}

document.addEventListener("DOMContentLoaded", function() {

    var list = document.getElementById("my-list");
    var staticValue = 123;
    var variableValue = 1;
    let otherVariableValue = 1;

    var currentChild = list.firstElementChild;
    while (currentChild !== null) {
        currentChild.addEventListener('click', function() {
            console.log("staticValue" + staticValue);
            console.log("variableValue=" + variableValue);
            console.log("is bound at evaluation time of this closure (!)");
            console.log("otherVariableValue=" + otherVariableValue);
        });
        currentChild = currentChild.nextElementSibling;
        variableValue++;
        otherVariableValue++;
    }

    var otherList = document.getElementById("my-other-list");
    var v = 0;

    var currentChild = otherList.firstElementChild;
    while (currentChild !== null) {
        currentChild.onclick = function(v) {
            // v is now in the scope of the handler function ...
            // ... and v is distinct for each onclick function
            var handler = function() {
                console.log(v);
            };
            return handler;
        }(++v); // bind to parameter AND evaluate function inside the loop (!!!)
        currentChild = currentChild.nextElementSibling;
    }
});