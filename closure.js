// can access outer scope
function foo() {
    var x = 1;

    var bar = function() {
        console.log(x);
    }

    bar();
}

foo();

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

    // can access outer scope even if outer scope has finished
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

    // can access outer scope even if outer scope has finished (advanced)
    var btn = document.getElementById("myButton");
    btn.addEventListener('click', function() {
        fadeOut(btn, 100);
    });
});