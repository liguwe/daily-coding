// result = []
// def backtrack(路径, 选择列表):
// if 满足结束条件:
// result.add(路径)
// return
//
// for 选择 in 选择列表:
// 做选择
// backtrack(路径, 选择列表)
// 撤销选择
//
//
//
// const result = [];

// function backtrack('路径', '选择列表') {
//
//     if ('满足结束条件') {
//         result.add('路径');
//         return;
//     }
//
//     for (let '选择' of '选择列表') {
//         // 做选择;
//         backtrack('路径', '选择列表');
//         // 撤销选择;
//     }
//
// }


var permute = function (nums) {
    let res = [];
    let track = [];
    let used = new Array(nums.length).fill(false);

    function backtrack(nums, track, used) {
        // 满足结束条件
        if (track.length === nums.length) {
            res.push([...track]);
            return;
        }
        // 从 选择列表 中 选择
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                // nums[i] 已经在 track 中，跳过
                continue;
            }

            // 做选择
            track.push(nums[i]);
            used[i] = true;
            backtrack(nums, track, used);

            // 取消选择
            track.pop();
            used[i] = false;
        }
    }

    backtrack(nums, track, used);
    return res;
}
