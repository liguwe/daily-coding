// setTimeout(() => {
//     console.log('timer1');
//     Promise.resolve().then(function() {
//         console.log('promise1');
//     });
// }, 0);
// setTimeout(() => {
//     console.log('timer2');
//     Promise.resolve().then(function() {
//         console.log('promise2');
//     });
// }, 0);


// test.js
// setTimeout(() => console.log(1));
// setImmediate(() => console.log(2));
// process.nextTick(() => console.log(3));
// Promise.resolve().then(() => console.log(4));
// setTimeout(() => console.log(6));
// (() => console.log(5))();

setTimeout(()=>{
    console.log('timer1')

    Promise.resolve().then(function() {
        console.log('promise1')
    })
}, 0)

setTimeout(()=>{
    console.log('timer2')

    Promise.resolve().then(function() {
        console.log('promise2')
    })
}, 0)