/**
 * 第 125 题：如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 * 转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） #243
 * */

let arr = [
    {id: 1},
    {id: 2, pid: 1}, // 重复
    {id: 3, pid: 2},
    {id: 4, pid: 1},
    {id: 5, pid: 3},
    {id: 6, pid: 2},
    {id: 6, pid: 2},
    {id: 2, pid: 1} // 重复
]

function fn(arr) {
    let map = new Map();
    for (let item of arr) {
        if (!map.get(item.id)) {
            map.set(item.id, item);
        }
    }
    console.log(map.values());
}

fn(arr);
