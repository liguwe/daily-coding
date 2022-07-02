/**
 * 柯里化
 * 参数固定场景
 * add(1)(2)(3)
 * add(4)(5)(6)
 *
 * */

const curry = (fn, ...args1) => {
    if (args1.length >= fn.length) {
        return fn(...args1)
    } else {
        return (...args2) => {
            return curry(fn, ...args1, ...args2);
        }
    }
}

function add1(x, y, z) {
    return x + y + z;
}

const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
