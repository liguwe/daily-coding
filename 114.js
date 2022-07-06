/*************************************************
 * 114、实现map、filter、push等方法
 * 使用reduce实现map方法
 ************************************************/

// ::::循环实现map方法
Array.prototype._map = function (fn) {

    // 错误处理
    if (!Array.isArray(this) || typeof fn != 'function') {
        throw new Error('has Error, please check!')
    }

    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i, arr);
    }
    return res;
}

// ::::指定上下文参数
Array.prototype._map1 = function (fn, context) {

    // 错误处理
    if (!Array.isArray(this) || typeof fn !== 'function') {
        throw new Error('has Error, please check!')
    }

    let arr = this;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn.call(context, arr[i], i, arr);
    }
    return res;
}

// ::::reduce实现map方法
Array.prototype._map2 = function (fn, context) {
    // 错误处理
    if (!Array.isArray(this) || typeof fn != 'function') {
        throw new Error('has Error, please check!')
    }

    let arr = this;
    let res = [];

    arr.reduce((prev, next, i, array) => {
        res[i] = fn.call(context, next, i, arr);
    }, arr[0])

    return res;
};


let arr2 = [1, 2, 3, 4, 5];

let arr2Res = arr2._map2((item,index,arr) => {
    return item * 2;
})

console.log(arr2Res)




