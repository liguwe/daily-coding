/*************************************************
 * // ::::resolve() 后面代码同步执行
 ************************************************/

var promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    //// :::: 注意这里不会永远不会执行，会同步执行
    console.log(2)
})
promise.then(() => {
    console.log(4)
})
console.log(3)


/*************************************************
 * 因为没有resove ,所以永远不会执行到这里来
 ************************************************/
/**
 * 题目=3
 * */
var promise = new Promise((resolve, reject) => {
    console.log(1)
})
// ::::因为没有resove ,所以永远不会执行到这里来
promise.then(() => {
    console.log(2)
})
console.log(3)
// 1 3

/*************************************************
 * promise.then(console.log(2))
 ************************************************/
var promise = new Promise((resolve, reject) => {
    console.log(1)
})
promise.then(console.log(2)) //// :::: 这里是一个表达式，会同步执行
console.log(3)
// 1 2 3

