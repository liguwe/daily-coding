/*************************************************
 * 数组中或者字符串中出现1的次数
 ************************************************/


// ::::数组转成字符串，如下
let s = '232323112130113110dfdfdffd1111';

let r = /1+/g

let a = s.match(r);

console.log(a);
// [ '11', '1', '11', '11', '1111' ]
// ::::=> 然后算就好了