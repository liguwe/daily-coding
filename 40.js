/**
 * 冒泡算法
 * 1、外层 for 循环控制循环次数
 * 2、内层 for 循环进行两数交换，找每次的最大数，排到最后
 * 3、设置一个标志位，减少不必要的循环
 *
 * https://muyiy.cn/question/program/54.html
 * */



function fn(arr) {
    let len = arr.length;
    if (len <= 1) {
        return;
    }
    for (let i = 0; i < len - 1; i++) {
        // 要排到最后，
        // 你想想冒泡场景，每次往上越来越大嘛
        for (let j = 0; j < len - 1 - i; j++) {
            // todo 这里，注意是j+1
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let arr1 = [1, 3, 7, 2, 9, 6];
console.log(fn(arr1))

// ::::每次最大值放到最右后，会将本轮最后一个操作的位置作为下一轮的终点，
// :::: 可以减少不必要的一些冒泡
function fn1(arr) {
    let i = arr.length - 1;
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        // 外循环
        i = pos;
    }
    console.log(arr);
}


let arr2 = [1, 3, 7, 2, 9, 6];
fn1(arr2);
