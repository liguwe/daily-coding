var promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(3)
        // :::: 这里的必须resolve后才能往后走
        resolve()
    }, 1000)
})

promise.then(() => {
    console.log(4)
})
promise.then(() => {
    console.log(5)
})
console.log(2)
