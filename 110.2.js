


// 1 2 3 4 5
console.log('1');

setTimeout(() => {
    console.log('5')
}, 0)

new Promise((resolve, reject) => {
    console.log('2')
    throw new Error('err');
    resolve()
}).then(() => {

    // :::: 这里面的都不执行
    console.log('4')
    setTimeout(() => {
        console.log('5')
    }, 0)
    new Promise((resolve, reject) => {
        console.log('6')
        resolve()
    }).then(() => {
        console.log('7')
    })


}).catch(() => {

    console.log('4')

})

console.log('3');
