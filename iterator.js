function iterator() {

    var args = arguments;
    var i = 0;

    return {
        hasNext: function() {
            return i <= args.length;
        },
        next: function() {
            return args[i++];
        }
    };
}

var it = iterator(1, 2, 3, 4, 5);
console.log(it.next());
console.log(it.next());
console.log(it.next());

var buffer = {
    entries: [],
    add: function(val) {
        this.entries.push(val);
    },
    concat: function() {
        return this.entries.join("");
    }
};

buffer.add("a");
buffer.add(1);
buffer.add("c");
console.log(buffer.concat());

var someArr = [ 1, "2", 3, "B"];
someArr.forEach(buffer.add, buffer);
console.log(buffer.concat());
