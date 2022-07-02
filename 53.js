/**
 *
 * 多数之和
 * sum2
 * sum3
 * twoSum
 *
 * 给定一个整数数组 nums和一个整数目标值 target，
 * 请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *
 * 你可以按任意顺序返回答案。
 *
 * 示例 1：
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 * 示例 2：
 *
 * 输入：nums = [3,2,4], target = 6
 * 输出：[1,2]
 * 示例 3：
 *
 * 输入：nums = [3,3], target = 6
 * 输出：[0,1]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/two-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    let m = new Map();
    let res = [];
    // 把索引存起来
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        let b = target - a;
        // b存在数组中，即找到了两个这两个数组了
        if (m.has(b)) {
            res.push([a,b]);
        }
    }
    return res;
    console.log(res);
};

export default twoSum;

twoSum([3,3],6)
twoSum([2,7,11,15],9)
twoSum([3,2,4],6)

