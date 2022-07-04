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
let temp = {};

arr.forEach((item,i) => {
    if(i === 0){
       res.value = item;
       // ::::temp引用res => 后面只需要操作temp即可
       temp = res;
    }else {
        temp.children = {}
        temp.children.value = item;
        temp = temp.children;
    }

})

console.log(JSON.stringify(res));



