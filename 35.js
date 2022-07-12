/**
 * 异步顺序
 * */

async function async1() {
    console.log('2');
    //// ::::会直接执行
    await async2();
    console.log('6');
}
async function async2() {
    console.log('3');
}

console.log('1');

setTimeout(function() {
    console.log('8');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('4');
    resolve();
}).then(function() {
    console.log('7');
});
console.log('5');





const promise = new Promise((resolve, reject) => {
    console.log(1);
    resolve(5);
    console.log(2);
}).then(val => {
    console.log(val);
});

promise.then(() => {
    console.log(3);
});

console.log(4);

setTimeout(function() {
    console.log(6);
});
