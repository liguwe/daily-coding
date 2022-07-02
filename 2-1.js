/*************************************************
 * 数组洗牌
 * ● 思路：从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素。
 * ● 关键：random = Math.floor(length * Math.random());
 ************************************************/


let a = [1, 2, 3, 4, 5];

function fn1(arr) {
    let r = arr.length - 1;
    while (r > -1) {
        console.log(r);
        let random = Math.floor(Math.random() * r);
        [arr[random], arr[r]] = [arr[r], arr[random]];
        r--;
    }
    console.log(arr);
    return arr;
}


fn1(a);
fn1(a);
fn1(a);
fn1(a);
fn1(a);
