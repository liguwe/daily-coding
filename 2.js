/**
 * 第 107 题：考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素 #187
 * 比如有个数组有10000个元素，从中不重复随机选取100个元素。
 * */


var arr = [];
for (let i = 0; i < 100000; i++) {
    arr[i] = i + 1;
}

let result = [];
let randomNum = 100;
let randomIndex = [];

for (let i = 0; i < randomNum; i++) {
    let luckyDog = Math.floor(Math.random() * (arr.length - i));
    result.push(arr[luckyDog]);
    arr[luckyDog] = arr[arr.length - i - 1];
}
