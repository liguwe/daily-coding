console.log('1');

setTimeout(() => {
    console.log('2')
}, 0)

new Promise((resolve, reject) => {
    console.log('3')
    // throw new Error('err'); 如果是抛错误呢？ 直接捕获错误了，打印出8
    // ::::这里注释了，那么就不会打印后面的then/catch都不会打印
    // resolve()
}).then(() => {

    console.log('4')
    setTimeout(() => {
        console.log('5')
    }, 0)
    new Promise((resolve, reject) => {
        console.log('6')
        // resolve()
    }).then(() => {
        console.log('7')
    })
}).catch(() => {
    console.log(8)
})

console.log('9');
