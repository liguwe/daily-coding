/**************************************************************************
 * // ::::return是可以中断循环的，之前都懵懵懂懂的
 * ***********************************************************************/
function test() {
    // 或者使用while一样的效果
    for (let i = 1; i < 10; i++) {
        if (i === 5) return;
        console.log(i);
    }
}

test();
