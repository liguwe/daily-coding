/**
 * @description
 * 回溯算法
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 *
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 *
 * 示例 1：
 *
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 示例 2：
 *
 * 输入：nums = [0]
 * 输出：[[],[0]]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/subsets
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * */

function fn(nums) {
    if (nums.length === 0) {
        return [[]];
    }

    let res = [];
    let track = [];

    function backtrack(nums, index, track, res) {
        /**
         * 满足条件
         * */
        if (Array.isArray(track)) {
            res.push([...track]);
        }
        if (index === nums.length) {
            return;
        }

        // 最多选择3个，少于三个就选择剩余的
        for (let i = index; i < nums.length; i++) {
            /**
             * 做选择
             * */
            track.push(nums[i])
            backtrack(nums, i + 1, track, res);
            /**
             * 取消选择
             * */
            track.pop();
        }
    }

    backtrack(nums, 0, track, res);

    console.log(res);

    return res;
}

fn([1, 2, 3]);
fn([[0]]);
