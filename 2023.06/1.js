/**
 * @param {number[][]} intervals
 * @return {number}
 */
var notCrossingIntervals = function (intervals) {
    // base case
    if (intervals.length === 0) return 0;
    // ::::第一步：先按照 `end` 排序，并选出区间 `x` ，`即` 第一个区间
    // 升序排列
    intervals.sort((a, b) => a[1] - b[1]);

    //  :::: 至少有一个区间不相交
    let count = 1;
    // 排序后，第一个区间就是 x
    let x = intervals[0][1];

    // ::::第二步：所有与 `x`  相交的，`移除个数 + 1`
    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        // ，不相交，不相交，不相交，不相交
        if (start >= x) {
            console.log('不相交');
            count++;
            x = intervals[i][1];
        }
    }
    // 返回相交的个数，即为要移除的个数
    return count;
};

console.log(notCrossingIntervals([[1, 2], [2, 3], [3, 4], [1, 3]]));
console.log(notCrossingIntervals([[1, 2], [1, 2], [1, 2]]))


/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    return intervals.length - notCrossingIntervals(intervals);
};


