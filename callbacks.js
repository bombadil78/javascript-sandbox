var f = function(cb) {
    console.log("do sth inside f()")
    setTimeout(function() {
        cb()
    }, 0)
}

f(function() {
    console.log("done with f()")
})

console.log("see, i'm not blocking anyone here...")
