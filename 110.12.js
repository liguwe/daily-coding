var promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    //// :::: 此时 promise 的状态已经改为了 resolved ，不能再重新翻转
    reject()
})
promise.then(() => {
    console.log(3)
}).catch(() => {
    console.log(4) // ::::不能到这儿
})
console.log(2)
