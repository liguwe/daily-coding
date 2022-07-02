/*************************************************
 * 遍历方法实现一个千分位
 * 转成数组，然后reverse过来，然后添加 ， 即可
 * [
 *   '0', '0', '0', '0',
 *   '0', '0', '0', '0',
 *   '0', '0', '0', '0',
 *   '0', '0', '0', '1'
 * ]
 * ===================> 变成
 * [
 *   '0',  '0',  '0,', '0',
 *   '0',  '0,', '0',  '0',
 *   '0,', '0',  '0',  '0,',
 *   '0',  '0',  '0,', '1'
 * ]
 * ===================> 再reverse过来
 *
 *
 * ::: reverse方法只能使用在数组中，而字符串里没有 
 ************************************************/

let num = '1000000000000000';

let arr = num.split('');
arr.reverse()

for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 3 === 0) {
        console.log(i + 1);
        arr[i] = `,${arr[i]}`
    }
}

console.log(arr);

arr.reverse()

console.log(arr);

console.log(arr.join(''))