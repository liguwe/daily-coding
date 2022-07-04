/**
 *字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 示例一: 'abc' --> {value: 'abc'}
 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */


let s = '[abc[bcd[def]]]';
let r = /[\[\]]/g
// console.log(s.split(r))

/*************************************************
 *     [
 *     '',    'abc', 'bcd',
 *         'def', '',    '',
 *         ''
 *     ]
 ************************************************/

let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];


let res = {};

// ::::没传初始值，index只会打印 1、2、3、4 忽略0
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     * abc bcd 1 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined def 2 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined gfg 3 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined ccc 4 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     *
     * */
})


arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    // ::::打印结果如下
    /**
     * {} abc 0 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined bcd 1 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined def 2 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined gfg 3 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * undefined ccc 4 [ 'abc', 'bcd', 'def', 'gfg', 'ccc' ]
     * */
}, res)

console.log('\n********\n');
arr.reduce((a, b, index, array) => {
    console.log(a, b, index, array);
    a.value = b;
    let children = {};
    a.children = children;
    // ::::每次返回children的引用
    return children;
}, res)

console.log(JSON.stringify(res));
