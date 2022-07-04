async function async1() {
    console.log('2');
    await async2();
    //更改如下：
    setTimeout(function () {
        console.log('8')
    }, 0)
}

async function async2() {
    //更改如下：
    setTimeout(function () {
        console.log('7')
    }, 0)
}

console.log('1');

setTimeout(function () {
    console.log('6');
}, 0)

async1();

new Promise(function (resolve) {
    console.log('3');
    resolve();
}).then(function () {
    console.log('5');
});

console.log('4');
