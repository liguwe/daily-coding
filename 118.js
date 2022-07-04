/*************************************************
 * 小海报数问题
 ************************************************/
function childNum(num, count) {
    // 初始化，每个元素都大于0，
    let allplayer = [];
    for (let i = 0; i < num; i++) {
        allplayer[i] = i + 1;
    }

    let exitCount = 0;    // 离开人数
    let counter = 0;      // 记录报数
    let curIndex = 0;     // 当前下标

    // 只剩下一个小孩时
    while (exitCount < num - 1) {
        // 如果当前小孩没有标记为0,计数器+1
        if (allplayer[curIndex] !== 0) {
            counter++;
        }
        // 当计数器到 3 时，重新记，标记并且更新离开人数
        if (counter === count) {
            allplayer[curIndex] = 0;
            counter = 0;
            exitCount++;
        }
        // 一直遍历，
        curIndex++;
        // 特别重要，到数组最后一个，当前下标从0开始
        if (curIndex === num) {
            curIndex = 0
        }
    }
    for (i = 0; i < num; i++) {
        if (allplayer[i] !== 0) {
            return allplayer[i]
        }
    }
}

childNum(30, 3)


var removeDuplicates = function (nums) {
    let slow = 0,
        fast = 0;
    for (let i = 0; i < nums.length; i++) {
        fast = i;
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    console.log(nums);
    return slow + 1;
};

removeDuplicates([1, 2, 3, 4, 4, 5, 6])
