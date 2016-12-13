function f(name) {
    return 'hello ' + name;
}

console.log('function:');
console.log(f('foo'));

obj = {
    f: function() {
        return 'hello ' + this.name;
    },
    name: 'obj'
}

console.log('method:');
console.log(obj.f());

obj2 = {
    f: obj.f,
    name: 'obj2'
};

console.log('method2:');
console.log(obj2.f());
console.log('this evaluates to the receiver of the call, NOT the definer');

function ff() {
    return 'goodbye ' + this.name;
}

console.log(ff());
obj2.ff = ff;
console.log(obj2.ff());
console.log('Reuse methods');

function Foo(name) {
    this.name = name;
};

var foo = new Foo('my name');
console.log(foo);
console.log("A function is treated as constructor if invoked with new");
console.log("A constructor call binds this to a newly created object, not to the receiver (there is none...)");

