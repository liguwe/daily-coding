let s1 = "hello   world    labuladong  ";

/**
 * 去除多余空格
 * */
function removeSpace(s1) {
    return s1.trim().replace(/\s+/g,' ');
}

/**
 * 使用双指针技巧实现字符串的翻转
 * */
function reverseString(str) {
    let left = 0;  // 左指针
    let right = str.length - 1;  // 右指针
    let arr = removeSpace(str).split('');  // 将字符串转换为字符数组
    while (left < right) {
        // 交换左右指针指向的字符
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        // 移动指针
        left++;
        right--;
    }
    return arr.join('');  // 将字符数组转换回字符串
}
console.log(reverseString(s1)); // gnodulab dlrow olleh


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const newStr = reverseString(s);
    const arr = newStr.split(' ');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(reverseString(arr[i]));
    }
    return res.join(' ');
};

console.log(reverseWords(s1)); // labuladong world hello
