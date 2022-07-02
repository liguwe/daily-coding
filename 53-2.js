/**
 *
 * 3sum
 * 三数之和
 * 给你一个包含 n 个整数的数组nums，判断nums中是否存在三个元素 a，b，c ，使得a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 *
 * 注意：答案中不可以包含重复的三元组。
 *
 *
 * 示例 1：
 *
 * 输入：nums = [-1,0,1,2,-1,-4]
 * 输出：[[-1,-1,2],[-1,0,1]]
 * 示例 2：
 *
 * 输入：nums = []
 * 输出：[]
 * 示例 3：
 *
 * 输入：nums = [0]
 * 输出：[]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/3sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * */

/**
 * @param idx 开始找的位置
 * */
// TODO 关键是添加开始找的位置参数
const twoSum = function (nums, idx, target) {
    let m = new Map();
    let res = [];
    // 把索引存起来
    for (let i = idx; i < nums.length; i++) {
        m.set(nums[i], i);
    }
    for (let i = idx; i < nums.length; i++) {
        let a = nums[i];
        let b = target - a;
        // b存在数组中，即找到了两个这两个数组了
        if (m.has(b)) {
            res.push([a, b]);
        }
    }
    return res;
};

const fn = (arr, t) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let arr2 = twoSum(arr, i + 1, t - a);
        for (let j = 0; j < arr2.length; j++) {
            // console.log([a, ...arr2[j]]);
            res.push([a, ...arr2[j]])
            // todo 这里去重是个麻烦事情，直接排序去重吧
        }
    }

    res.forEach((item)=>{
        item.sort();
    })
    let result = [];
    res.forEach((it)=>{

    })
    return res;
}

// 输出：[[-1,-1,2],[-1,0,1]]
console.log(fn([-1, 0, 1, 2, -1, -4], 0))
// console.log(fn([], 0))

// TODO 需要去重
