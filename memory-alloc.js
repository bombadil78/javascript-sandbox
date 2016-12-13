document.onload('DOMDocumentLoaded', function() {

    function f1(x) {
        return x * 10;
    };

    function f2() {
        return f1;
    }

    var x = f2();
    console.log(x(10));
});