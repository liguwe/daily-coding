/**
 * 1
 * */
async function async1() {
    console.log('2');
    // todo 这里，直接会执行async2函数的，所有会先打印出 3
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

/**
 * 2
 * */
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

/**
* 3
* */
async function a1 () {
    console.log('2')
    await a2()
    console.log('6')
}
async function a2 () {
    console.log('3')
}

console.log('1')

setTimeout(() => {
    console.log('10')
}, 0)

Promise.resolve().then(() => {
    console.log('7')
})

a1()

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('4')
})

promise2.then((res) => {
    console.log(8,res)
    Promise.resolve().then(() => {
        console.log('9')
    })
})
console.log('5')


