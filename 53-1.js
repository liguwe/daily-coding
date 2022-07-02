/**
 *
 * 两数之和：有序数组
 * 示例 1：
 * 输入：numbers = [2,7,11,15], target = 9
 * 输出：[1,2]
 * 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 * 示例 2：
 *
 * 输入：numbers = [2,3,4], target = 6
 * 输出：[1,3]
 * 解释：2 与 4 之和等于目标数 6 。因此 index1 = 1, index2 = 3 。返回 [1, 3] 。
 * 示例 3：
 *
 * 输入：numbers = [-1,0], target = -1
 * 输出：[1,2]
 * 解释：-1 与 0 之和等于目标数 -1 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */

// 双指针
// 下面找出所有的可能性
export default function fn(nums, target) {
    let res = [];
    let l = 0;
    let r = nums.length - 1;
    //TODO 一定要记住，while这里的条件是满足，而不是不满足！！！！
    while (l < r) {
        // TODO 变量提出来，写的都快写
        let sum = nums[l] + nums[r];
        if (sum === target) {
            res.push([nums[l], nums[r]])
            //TODO 只找一个话这里 return就好了
            l++;
            r--;
        } else if (sum < target) {
            l++;// 让 sum 大一点
        } else if (sum > target) {
            r--;// 让 sum 小一点
        }
    }
    console.log(res);
    return res;
}

// TODO 然后再去个重
// console.log(fn([2, 3, 4], 6))
// console.log(fn([2, 7, 11, 15], 9))
console.log(fn([1, 1, 1, 2, 2, 3, 3], 4))
//TODO 需要去重 [ [ 1, 3 ], [ 1, 3 ], [ 2, 2 ] ]
