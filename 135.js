/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    // 以桶为视角
    let n = nums.length;
    if (k > n) return null;
    let sum = nums.reduce((pre, cur, index, arr) => {
        return pre + cur;
    })
    // sum = sum/k;
    if (sum % k === 0) {
        sum = sum / k;
    } else {
        return false
    }
    let used = new Array(n).fill(false);

    return travse(nums, 0, used, 0, k, sum)

    // 数组nums 中下标为index的值 是否加入第k个桶里面，bucketSum 为当前第k个桶的总和。used标识nums是否被使用过
    function travse(nums, start, used, bucketSum, k, target) {
        if (k === 0) {
            // 终结条件
            return true;
        }
        if (bucketSum === target) {
            return travse(nums, 0, used, 0, --k, target);
        }
        for (let i = start; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            if (bucketSum + nums[i] > target) {
                continue;
            }
            bucketSum += nums[i];
            used[i] = true;
            // 遍历数组中的下一个数字是否加入
            if (travse(nums, i + 1, used, bucketSum, k, target)) {
                return true;
            }
            used[i] = false;
            bucketSum -= nums[i];
        }
        return false;
    }

};
