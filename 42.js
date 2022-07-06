/**
 * 写一个new
 * new操作发生了什么
 * */


function _new(fn, ...args) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, args);
    return ret instanceof Object ? ret : obj;
}
