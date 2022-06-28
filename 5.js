/**
 * 第 143 题：将'10000000000'形式的字符串，以每3位进行分隔展示'10.000.000.000',多种实现方式 #296
 * */

let str = '10000000000';
let s1 = '10000000000'.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
console.log('===>', s1);
console.log('===>', Number(str).toLocaleString());


let s3 = str.split("").reverse().reduce((prev, cur, index) => {

    if ((index + 1) % 3 === 0) {
        return ',' + cur + prev
    }
    return cur + prev
})

console.log('s3===>',s3);


let s4 = [...str].reverse().map((v, i) => {
    if (i % 3 === 0 && i !== 0) {
        return `${v},`
    }
    return v
}).reverse().join("")

console.log('s4===>', s4);
