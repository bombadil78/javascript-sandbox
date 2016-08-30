document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");

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
        },
        true);

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
        },
        false);

});