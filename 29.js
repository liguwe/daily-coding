/**
 *  回溯算法
 *  全排列
 * 'abc' => ['abc','acb','bac','bca','cab','cba']
 *
 * @description 回溯算法，全排列！
 * */

function fn(arr) {
    let res = [];
    let used = new Array(arr.length).fill(false);

    /**
     * @param nums 选择列表
     * @param track 路径
     * @param used 标识是否已经选择了
     * */
    function backtrack(nums, track, used) {
        // if 满足条件
        /***************************
         * if 满足条件，触发添加路径
         * ************************/
        if (track.length === 3) {
            //TODO  这里需要做一个拷贝
            res.push([...track]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {

            let item = arr[i]
            /***************************
             * 选择
             * ************************/
            if (used[i]) continue; // 不合法选择

            track.push(item);
            used[i] = true;

            backtrack(nums, track, used);

            /***************************
             * 取消选择
             * ************************/
            track.pop();
            used[i] = false;

        }
    }

    backtrack(arr, [], used);

    console.log(res);


}

fn([1, 2, 3])
fn(['a', 'b', 'c'])
