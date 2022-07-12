
function fn(arr) {
    let res = [];
    let used = new Array(arr.length).fill(false);
    function backtrack(nums, track, used) {
        if (track.length === 3) {
            //TODO  这里需要做一个拷贝
            res.push([...track]);
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i]
            if (used[i]) continue; // 不合法选择
            track.push(item);
            used[i] = true;

            backtrack(nums, track, used);

            track.pop();
            used[i] = false;
        }
    }
    backtrack(arr, [], used);
}

fn([1, 2, 3])
fn(['a', 'b', 'c'])
