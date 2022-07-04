/*************************************************
 * 统计HTML标签中出现次数最多的标签
 ************************************************/


// :::: 1、获取tags数组
// :::: 2、使用map字典来存储 + 遍历即可

const tags = document.getElementsByTagName('*');
let map = new Map();
let maxStr = '';
let max = 0;
// 只是使用下标来获取，没有使用数组的方法，所以不需要将类数组转为数组
for (let i = 0; i < tags.length; i++) {
    let value = map.get(tags[i].tagName)
    if (value) {
        map.set(tags[i].tagName, ++value)
    } else {
        map.set(tags[i].tagName, 1);
    }
    // 统计，计算最大，实时更新，max和maxStr
    if (value > max) {
        maxStr = tags[i].tagName;
        max = value;
    }
}
console.log(`当前最多的标签为 ${maxStr}，个数为 ${max}`);
