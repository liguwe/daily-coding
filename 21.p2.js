//id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
// 现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
// parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
    {id: 1, name: '部门A', parentId: 0},
    {id: 2, name: '部门B', parentId: 0},
    {id: 3, name: '部门C', parentId: 1},
    {id: 4, name: '部门D', parentId: 1},
    {id: 5, name: '部门E', parentId: 2},
    {id: 6, name: '部门F', parentId: 3},
    {id: 7, name: '部门G', parentId: 2},
    {id: 8, name: '部门H', parentId: 4}
];

//// ::::方法一，借助map，很快实现！
function convert(list) {
    let result = [];
    let map = new Map();
    list.forEach((item) => {
        map.set(item.id, item);
    });
    list.forEach(el => {
        // ::::遍历，看看获取是否能获取到pid,没有的话赋值
        let parent = map.get(el.parentId);
        if (!parent) {
            el.children = []
            return
        }
        if (parent.hasOwnProperty('children')) {
            parent.children.push(el);
        } else {
            parent['children'] = [];
            parent.children.push(el);
        }
    });

    for (let i = 0; i < list.length; i++) {
        const el = list[i];
        if (el.parentId === 0) {
            result.push(el)
        }
    }
    return result
}


//// :::: 方法二，第二个参数很重要
function convert(source, parentId = 0) {
    let trees = [];
    for (let item of source) {
        if (item.parentId === parentId) {
            let children = convert(source, item['id']);
            if (children.length) {
                item.children = children
            }
            trees.push(item);
        }
    }
    return trees;
}

console.log(convert(list))

