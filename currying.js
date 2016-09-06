function sum(arr, func) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += func(arr[i]);
    }
    return total;
}

function square(x) {
    return x * x;
}

var squaredSum = function(arr) {
    return sum(arr, square);
};

var arr = [ 1, 3, 5];
console.log(squaredSum(arr));

function concat(fct) {
    return function (arr) {
        var total = "";
        for (var i = 0; i < arr.length; i++) {
            total += fct(arr[i]);
        }
        return total;
    }
}

var myConcat = concat(function(x) {
    return '<' + x + '> ';
});

console.log(myConcat(["a", "b"]));
console.log(myConcat([1, 2, 3]));




