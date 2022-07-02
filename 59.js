/**
 * 二分查找左边界、有边界
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回[-1, -1]。
 * 你必须设计并实现时间复杂度为O(log n)的算法解决此问题。
 *
 * 示例 1：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 示例2：
 *
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 示例 3：
 *
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */


const fn = (nums, target) => {
    let left = 0, right = nums.length - 1;
    // todo 这里是小于等于
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] === target) {
            // 直接返回
            return mid;
        }
    }
    // 直接返回
    return -1;
}

const left = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    // todo 这里是小于等于
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] === target) {
            // 别返回，锁定左侧边界
            right = mid - 1;
        }
    }
    // 最后要检查 left 越界的情况
    if (left >= nums.length || nums[left] !== target) {
        return -1;
    }
    // 直接返回
    return left;
}


const right = (nums, target) => {
    let left = 0,
        right = nums.length - 1;
    // todo 这里是小于等于
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] === target) {
            // 别返回，锁定右侧边界
            left = mid + 1;
        }
    }

    // 最后要检查 left 越界的情况
    if (right < 0 || nums[right] !== target) {
        return -1;
    }
    // 直接返回
    return right;
}


let nums = [5, 7, 7, 8, 8, 10], target = 8

console.log(fn(nums, target))
console.log(left(nums, target))
console.log(right(nums, target))
