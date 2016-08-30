document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

    // capturing vs. bubbling

    document.getElementById('capture-div').addEventListener(
        'click',
        function() {
            console.log('clicked capture-div');
        },
        true);

    document.getElementById('capture-ul').addEventListener(
        'click',
        function() {
            console.log('clicked capture-ul');
        },
        true);

    document.getElementById('capture-li').addEventListener(
        'click',
        function() {
            console.log('clicked capture-li');
        });

    document.getElementById('bubble-div').addEventListener(
        'click',
        function() {
            console.log('clicked bubble-div');
        },
        false);

    document.getElementById('bubble-ul').addEventListener(
        'click',
        function() {
            console.log('clicked bubble-ul');
        },
        false);

    document.getElementById('bubble-li').addEventListener(
        'click',
        function() {
            console.log('bubbling is the default');
            console.log('clicked bubble-li');
        });

    // prevent default event

    document.getElementById('prevent-default-link').addEventListener(
        'click',
        function(event) {
            event.preventDefault();
            console.log(event);
        });
});