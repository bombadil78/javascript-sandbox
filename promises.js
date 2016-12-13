// a promise object takes a so-called executor function as its argument
// the executor function takes two callbacks, one for resolving, one for rejecting
// those callbacks are used by the Promise object to signal resolving / rejection with a given value/error
// the executor function is executed IMMEDIATELY. there are two cases:
// * sync: the promise is resolved/rejected immediately (not common)
// * async: an async call is made; the callback used in the async call resolves/rejects the promise
// returning a new promise inside then() can be used to chain promises synchronously

function doStuffSync() {
    return Promise.resolve('foo')
    // return Promise.reject('nok')
}

function doStuffAsync(someTime) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('ok')
        }, someTime)
    })
}

function doOneAfterTheOther() {
    doStuffSync()
        .then(function() {})
        .then(function(val) {
            console.log(val)
        })
        .then(function(undefined, err) {
            console.log(err)
        })
}


doOneAfterTheOther()

let allTasks = Promise.all([
    doStuffSync(),
    doStuffAsync(1000),
    doStuffAsync(2000),
    doStuffAsync(3000),
    doStuffSync()
])

let firstTask = Promise.race([
    doStuffAsync(1000),
    doStuffAsync(2000),
    doStuffAsync(3000),
])

allTasks
    .then((fulfilled) => {
        console.log(fulfilled)
    })
    .catch((err) => {
        console.log(err)
    })

firstTask.then((fulfilled) => {
    console.log(fulfilled)
})
