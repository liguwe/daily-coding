/**
 *  找出字符串中连续出现最多的字符和个数 #220
 * 'abcaakjbb' => {'a':2,'b':2}
 * 'abbkejsbcccwqaa' => {'c':3}
 * */

// // ::::最最最最最最关键的
let reg = /(\w)\1*/g


const arr1 = 'abcaakjbb'.match(reg);
const arr2 = 'abbkejsbcccwqaa'.match(reg);

console.log(arr1);
console.log(arr2);

let maxLen = 1;
let maxIndex = 0;
let maxItem = '';
arr2.forEach((item, index) => {
    if (item.length > maxLen) {
        maxLen = item.length;
        maxIndex = index;
        maxItem = item;
    }
})
console.log(maxIndex, maxLen, maxItem);

