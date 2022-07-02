/**
 * 柯里化
 * 参数不固定场景
 * add(1)(2)(3,4).sumof()
 *
 * */

const add = (...args) => {
    let vars = []
    const curried = (...arg2) => {
        vars = [...vars, ...arg2]
        return curried
    }
    curried.sumof = () => {
        // todo做你想做的事情
        return vars;
    }
    return curried(...args)
}

console.log(add(1)(2)(3, 4).sumof())
console.log(add(1)(2)(3, 4)(7, 8).sumof())
