/**
 *
 *   实现一个深拷贝，考虑下面的数据结构场景
 *   const symbolName = Symbol();
 *   const obj = {
 *     objNumber: new Number(1),
 *     number: 1,
 *     objString: new String('ss'),
 *     string: 'stirng',
 *     objRegexp: new RegExp('\\w'),
 *     regexp: /w+/g,
 *     date: new Date(),
 *     function: function () {},
 *     array: [{a: 1}, 2],
 *     [symbolName]: 111
 *   }
 *   obj.d = obj;
 * */

const symbolName = Symbol();
const obj = {
    objNumber: new Number(1),
    number: 1,
    objString: new String('ss'),
    string: 'stirng',
    b1: false,
    objRegexp: new RegExp('\\w'),
    regexp: /w+/g,
    date: new Date(),
    b: {
        a: 'a',
        c: {
            b: 'b'
        }
    },
    function: function () {

    },
    array: [{a: 1}, 2],
    [symbolName]: 'Symbol()',
    [Symbol(1)]: 'Symbol()',
}
obj.d = obj;

function getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null;
}



// 使用递归
// 如果是es6,那么 map就换成数组就好了，保证它是一个uniqueArr即可
function fn(obj, map = new WeakMap()) {

    // 基本数据类型
    if (['String', 'Boolean', 'Number', 'Null', 'Undefined'].includes(getType(obj))) {
        return obj;
    }

    if (map.get(obj)) {
        return obj;
    }
    let target = Array.isArray(obj) ? [] : {};
    map.set(obj, target);

    // TODO 这个不会检测出symbol
    // 1、可以使用Reflect.keys 全部能检测出全部keys
    // 2、可以使用 Object.getOwnPropertySymbols(obj) 检测出symbol keys
    Reflect.ownKeys(obj).forEach(key => { // 改动
        if (isObject(obj[key])) {
            target[key] = fn(obj[key], map);
        } else {
            target[key] = obj[key];
        }
    });

    return target;


}

console.log(fn(obj));

// 使用深度遍历

// 使用广度遍历
