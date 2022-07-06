/**
 * 如何将 [{id: 1}, {id: 2, pId: 1}, ...] 的重复数组（有重复数据）
 * 转成树形结构的数组 [{id: 1, child: [{id: 2, pId: 1}]}, ...] （需要去重） #243
 * */

// 已经去重了
let arr = [
    {id: 1,pid:0},
    {id: 2, pid: 1},
    {id: 3, pid: 2},
    {id: 4, pid: 1},
    {id: 5, pid: 3},
    {id: 6, pid: 2}
];

// ::::最最最关键的，是传两个参数
function fn(array, pid) {
    let trees = [];
    for (let item of array) {
        if (item.pid === pid) {
            // ::::做递归，双重循环
            let children = fn(array, item.id);
            if (children.length) {
                item.children = children;
            }
            trees.push(item);
        }
    }
    return trees;
}

let r = fn(arr, 0);
console.log(r);
console.log(JSON.stringify(r));


let rr = [
    {
        "id": 2,
        "pid": 1,
        "children": [
            {
                "id": 3,
                "pid": 2,
                "children": [
                    {
                        "id": 5,
                        "pid": 3
                    }
                ]
            },
            {
                "id": 6,
                "pid": 2
            }
        ]
    },
    {
        "id": 4,
        "pid": 1
    }
]


