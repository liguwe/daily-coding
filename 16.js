/**
 * 1,2,3,5,7,8,9 => 1~3,5,7~9
 * 1,2,3,5,7,8,10,12,13,14,100,101,102 => 1~3,5,7~8,10,12~14,100~102
 * */
function fn(str) {
    let arr = str.split(',').map(Number);
    let len = arr.length;
    let s = new Array(len).fill(false);
    // 第一步
    s[0] = arr[0];
    // 第二步 遍历
    for (let i = 1; i < len; i++) {
        let item = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (prev && next && item === prev + 1 && next === item + 1) {
            continue;
        } else if (prev && next && item === prev + 1 && next !== item + 1) {
            s[i] = `~${arr[i]}`;
        } else if (prev && next && (item !== prev + 1 || next !== item + 1)) {
            s[i] = `${arr[i]}`;
        } else if (prev && !next) {
            if (item === prev + 1) {
                s[i] = `~${arr[i]}`;
            } else {
                s[i] = `${arr[i]}`;
            }
        }
    }
    // 第三步 处理空值情况
    return s.filter(Boolean).join(',').replace(/,~/g, '~')
}

let str = '1,2,3,5,7,8,10,12,13,14,100,101,102';

console.log(fn('1,2,3,5,7,8,9'));
console.log(fn('1,2,3,5,7,8,10,12,13,14,100,101,102'));
