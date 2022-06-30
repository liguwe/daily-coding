/**
 * 第 92 题：已知数据格式，实现一个函数 fn 找出链条中所有的父级 id #143
 * */

const data = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];

// TODO 和其他遍历区别在于最外层就是一个数组
const fn = (data, value) => {
    let result = [];
    function dfs(data, res = []) {
        for (let item of data) {
            if (item.id === value) {
                res.push(item.id);
                // todo 这里需要注意，一定要浅拷贝下，否则后面又会被清除掉了
                result = [...res];
                // TODO 和其他遍历区别在于最外层就是一个数组，所以这里返回也没有人接受啊？
                return;
            } else if (item.children) {
                res.push(item.id);
                dfs(item.children, res);
                res.pop();
            }
        }
    }
    dfs(data)
    return result;
}
let a = fn(data, '122') // [ '1', '12', '122' ]
let b = fn(data, '111') // [ '1', '11', '111' ]
let c = fn(data, '11') // [ '1', '11', '111' ]

console.log(a)
console.log(b)
console.log(c)
