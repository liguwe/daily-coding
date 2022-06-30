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

for (let i = 0; i < randomNum; i++) {
    let luckyDog = Math.floor(Math.random() * (arr.length - i));
    result.push(arr[luckyDog]);
    arr[luckyDog] = arr[arr.length - i - 1];
}

console.log(result);


/**
 * 思路1： 分桶，概念会有点问题
 * 思路2：使用set
 * 思路3：洗牌
 * */


/**
 * todo 每次都把抽到的数据放到最后一位去了，那么下次再抽取是也不能可能再抽到了
 * 洗牌算法：
    1.生成一个0 - arr.length 的随机数
    2.交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组
    3.生成一个0 - arr.length - 1 的随机数
    4.交换该随机数位置元素和数组的倒数第二个元素，并把该随机位置的元素放入结果数组
    依次类推，直至取完所需的10k个元素
*/

function shuffle(arr, size) {
    let result = []
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * (arr.length - i))
        const item = arr[randomIndex]

        arr[randomIndex] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = item

        result.push(item)
    }
    return result
}
