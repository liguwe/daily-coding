async function async1() {
    console.log('2');
    // // :::: 这里，直接会执行async2函数的，所有会先打印出 3
    await async2();
    console.log('6');
}

async function async2() {
    console.log('3');
}

console.log('1');

setTimeout(function () {
    console.log('8');
}, 0)

async1();

new Promise(function (resolve) {
    console.log('4');
    resolve();
}).then(function () {
    console.log('7');
});
console.log('5');
