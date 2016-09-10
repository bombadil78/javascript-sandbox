function foo(x) {
    var y = x * x;
    return function(z) {
        return y + z;
    };
}

function fadeOut(element, interval) {
    var currentOpacity = 100;

    var step = function() {
        if (currentOpacity > 1) {
            currentOpacity -= 10;
            element.style.opacity = (currentOpacity / 100);
            setTimeout(step, interval);
        }
    };

    setTimeout(step, interval);
}

document.addEventListener("DOMContentLoaded", function() {

    function bindAll() {
        var bindMe = function(i) {
            return function() {
                alert(i);
            };
        };
        var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('click', bindMe(i));
        }
    }
    bindAll();

    var btn = document.getElementById("myButton");
    btn.addEventListener('click', function() {
        fadeOut(btn, 100);
    });

    var f1 = foo(1);
    console.log(f1(0));

    var f2 = foo(2);
    console.log(f2(1));

    var f3 = foo(3);
    console.log(f3(3));
});

