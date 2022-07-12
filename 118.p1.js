/*************************************************
 * 118、小孩报数问题
 *
 * ● 初始化，每个元素都大于0，设置为i+1
 * ● 使用while循环，注意循环到最后一个元素时，继续从零开始
 * ●//  ::::注意，不要想着去splice元素，标记即可
 * ● // ::::注意 ，最后两个小孩报数可以自己1，2、3循环的报，最后一个才不用报
 ************************************************/

function childNum(num, count) {
    // 初始化，每个元素都大于0，
    //// ::::如果等于0，则标记是离开的，最后统计不为零的数字即可
    let allplayer = [];
    for (let i = 0; i < num; i++) {
        allplayer[i] = i + 1;
    }

    let exitCount = 0;    // 离开人数
    let counter = 0;      // 记录报数
    let curIndex = 0;     // 当前下标

    //// ::::只剩下一个小孩时
    while (exitCount < num - 1) {

        //// ::::如果当前小孩没有标记为0,计数器+1

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

        //// ::::特别重要，到数组最后一个，当前下标从0开始
        if (curIndex === num) {
            curIndex = 0
        }

    }
    for (let i = 0; i < num; i++) {
        if (allplayer[i] !== 0) {
            return allplayer[i]
        }
    }
}

console.log(childNum(30, 3))

