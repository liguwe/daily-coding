/*************************************************
 * 打平一个树形结构
 ************************************************/
let ss = [
    {
        id: '1',
        name: '1',
        pid: '0',
        children: [
            {
                id: '1-1',
                name: '1-1',
                pid: '1',
            },
            {
                id: '1-2',
                name: '1-2',
                pid: '1',
                children: [
                    {
                        id: '1-2-1',
                        name: '1-2-1',
                        pid: '1-2',
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '2',
        pid: '0',
        children: [
            {
                id: '2-1',
                name: '2-1',
                pid: '2',
            }
        ]
    }
]

let res = [];


// :::: 其实这里前序后续位置都行
function flatten(arr) {
    arr.forEach((item, index) => {
        if (item.children && item.children.length) {
            // :::: 前序位置
            res.push(item)
            flatten(item.children)
            // :::: 后序遍历
            delete item.children;
        } else {
            res.push(item)
        }
    });
    return res;
}


console.log(flatten(ss))




