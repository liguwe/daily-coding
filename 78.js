/*************************************************
 * 统计HTML标签中以b开头的标签数量

 ************************************************/


/*************************************************
 * // 方法一：循环
 * ::::tagName是大写 => document.getElementsByTagName('*')[0].tagName === 'HTML'
 ************************************************/
const tags = document.getElementsByTagName('*');
// tags是类数组对象，内部实现了，部署 Iterator 接口，可以使用扩张运算符，否则不能使用扩张运算符
// 要使用数组的方法必须将类数组转为真正的数组
// tagName 都是大写的 :::: 使用startsWith('B')
const value = [...tags].filter((item) => item.tagName.startsWith('B'))


/*************************************************
 * // 方法二：树查找
 ************************************************/
const prefixBElements = [];
function dfs(ele) {
    if (ele.tagName.startsWith('B')) {
        prefixBElements.push(ele);
    }
    for (const child of ele.children) {
        dfs(child);
    }
}
// 从HTML根节点开始找
dfs(document.documentElement);
console.log(prefixBElements);
