/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 *
 * */

const add = (...args) => {
    let vars = [];

    // 写一个函数，形成闭包
    const curried = (...arg2) => {
        // ::::这里 vars,记住了
        vars = [...vars, ...arg2];
        return curried
    }

    curried.sumof = () => {
        //todo 做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())
