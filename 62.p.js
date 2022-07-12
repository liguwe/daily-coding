// add(1)(2)(3,4).sumof()

function add(...args) {

    let vars = [];
    const curry = (...args2) => {
        // ::::⚠️ 这里又写错了
        vars = [...vars,...args2];
        return curry;
    }
    curry.sumof = () => {
        return vars;
    }
    return curry(...args);
}

console.log(add(1)(2)(3,4).sumof())
console.log(add(1)(2)(3,4)(7)(8).sumof())
