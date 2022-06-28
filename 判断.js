/**
 * 题目1
 * */
var date = new Date()
console.log(1, new Date() - date)
setTimeout(() => {
    console.log(4, new Date() - date)
}, 500)

//TODO 这里有个坑，因为是表达式，所以直接执行了
Promise.resolve().then(console.log(2, new Date() - date))

while (new Date() - date < 1000) {

}
console.log(3, new Date() - date)
/**
 * 题目2
 * */
var promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2) // TODO 注意这里不会永远不会执行，会同步执行
})
promise.then(() => {
    console.log(4)
})
console.log(3)
/**
 * 题目=3
 * */
var promise = new Promise((resolve, reject) => {
    console.log(1)
})
// TODO，因为没有resove ,所以永远不会执行到这里来
promise.then(() => {
    console.log(2)
})
console.log(3)
// 1 3

/**
 * 题目4
 * */
var promise = new Promise((resolve, reject) => {
    console.log(1)
})
promise.then(console.log(2)) // 这里是一个表达式，会同步执行
console.log(3)
// 1 2 3

/**
 * 题目5
 * */
Promise.resolve(1)
    // then(2) 、 then(Promise.resolve(3)) 发生了值穿透，直接执行最后一个 then ，输出 1
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
// 1

/**
 * 题目6
 * */

var promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    // 此时 promise 的状态已经改为了 resolved ，不能再重新翻转
    reject()
})
promise.then(()=>{
    console.log(2)
}).catch(()=>{
    console.log(3)
})
console.log(4)
// 1
// 4
// 2

/**
 * 8
 * */
Promise.resolve(1)
    .then(res => {
        console.log(res);
        // 返回 return 2 实际上是包装成了 resolve(2)
        return 2;
    })
    .catch(err => {
        return 3;
    })
    .then(res => {
        console.log(res);
    });
// 1
// 2

/**
 * 题目9
 * */
var promise = new Promise((resolve, reject) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        resolve()
    }, 1000)
})

promise.then(() => {
    console.log(3)
})
promise.then(() => {
    console.log(4)
})
console.log(5)
// 1 5 2 3 4

/**
 * 题目10
 * */
