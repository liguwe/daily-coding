/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 *
 * */

function curry(fn, ...arg1) {
    if (arg1.length >= fn.length) {
        return fn(...arg1);
    } else {
        return (...arg2) => {
            return curry(fn, ...arg1, ...arg2)
        }
    }
}

const add1 = (a, b, c) => {
    return a + b + c;
}

let add = curry(add1)

console.log(add(1)(2)(3))
console.log(add(1)(3, 2))
console.log(add(1, 2, 3))
