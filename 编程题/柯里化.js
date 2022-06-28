var foo = function (...args) {
    let vars = [];
    const curry = (...args1) => {
        vars = args1.concat(args);
        // TODO 这里又忘记了！！！！！
        return curry;
    }
    curry.getValue = () => {
        let sum = 0;
        vars.forEach((item) => {
            sum += item;
        })
        return sum;
    }
    return curry(...args);
}

var f1 = foo(1, 2, 3);
console.log(f1.getValue()); // 6 输出是参数的和
var f2 = foo(1)(2, 3);
console.log(f2.getValue()); // 6
var f3 = foo(1)(2)(3)(4);
console.log(f3.getValue()); // 10
