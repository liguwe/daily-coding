/**
 * https://leetcode.cn/problems/sort-an-array/
 * */

function sort(nums, left, right) {
    if (left === right) {
        return;
    }
    const mid = Math.floor((left + right) / 2);
    // 利用定义，排序 nums[left..mid]
    sort(nums, left, mid);
    // 利用定义，排序 nums[mid+1..right]
    sort(nums, mid + 1, right);

    // ::::后序位置::::
    /*************************************************
     * ::::即，此时两部分子数组已经被排好序
     * ::::   合并两个有序数组，使 nums[left..right] 有序
     ************************************************/
    merge(nums, left, mid, right);
}

// 使用 【数组双指针技巧】，合并两个有序数组
function merge(nums, left, mid, right) {
    //  copy 到 temp 数组
    // ::::notice 不是 temp=[...nums]
    const temp = []
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    //// ::::使用 【数组双指针技巧】，合并两个有序数组
    let i = left, j = mid + 1;
    for (let p = left; p <= right; p++) {
        if (i === mid + 1) { // :::: notice i === mid + 1
            // 左半边数组已全部被合并
            nums[p] = temp[j++];
        } else if (j === right + 1) {
            // 右半边数组已全部被合并
            nums[p] = temp[i++];
        } else if (temp[i] > temp[j]) {
            nums[p] = temp[j++];
        } else {
            nums[p] = temp[i++];
        }
    }
};

const arr = [5, 12, 13, 14, 4, 3, 15, 16, 2, 1, 2, 0, 2, 3, 9, 10, 11, 9, 17, 18, 19, 20, 21, 22];
sort(arr, 0, arr.length - 1);
console.log(arr);
