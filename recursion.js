function findOneSolution(target) {

    function find(src, history) {
        if (src == target) {
            return history;
        } else if (src > target) {
            return null;
        } else {
            // since null is falsy find() will continue when nothing is found
            // since a string is truthy find() will stop when something is found
            return (find(src + 5, "(" + history + " + 5)") ||
            find(src * 3, "(" + history + " * 3)"));
        }
    }

    return find(1, "1");
}

function findAllSolutions(target) {

    function find(src, history) {
        console.log("find: src=" + src + ", history={" + history + "}");
        if (src == target) {
            return history;
        } else if (src > target) {
            return null;
        } else {
            var first = find(src + 5, "(" + history + " + 5)");
            var second = find(src * 3, "(" + history + " * 3)");

            var solutions = [];
            if (first !== null) solutions.push(first);
            if (second !== null) solutions.push(second);

            if (solutions.length > 0) {
                return solutions.join("\n");
            } else {
                return null;
            }
        }
    }

    return find(1, "1");
}


document.addEventListener("DOMContentLoaded", function() {
    var x = findOneSolution(67);
    console.log(x);

    var y = findAllSolutions(54);
    console.log(y);
});