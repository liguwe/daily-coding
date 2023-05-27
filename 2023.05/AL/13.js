/**
 * @description 初始化一个 3* 5 的二维数组，每个元素都是'.'
 * *
 */
const row = 3;
const col = 5;
const array = Array.from({length: row}, () => Array(col).fill('*'));
console.log(array);
