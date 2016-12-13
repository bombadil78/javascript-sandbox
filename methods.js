document.addEventListener("DOMContentLoaded", function() {

    console.log("array.concat(")
    var arr = [ 1, 2, 3 ];
    var arr2 = [ 3, 4, 5 ];
    var sillyArr = [];
    sillyArr[2] = 2;
    sillyArr[-1] = -1;
    sillyArr[4] = 4;
    var otherSillyArr = [];
    otherSillyArr[3] = 3;
    otherSillyArr[4] = 4;
    otherSillyArr[5] = 5;

    console.log(arr.concat(arr2));
    console.log(arr);
    console.log(arr2);

    console.log(arr.concat(sillyArr));
    console.log(arr.concat(otherSillyArr));


});