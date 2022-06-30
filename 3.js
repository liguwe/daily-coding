/**
 * 有一堆扑克牌，将牌堆第一张放到桌子上，再将接下来的牌堆的第一张放到牌底，如此往复；
 * 最后桌子上的牌顺序为： (牌底) 1,2,3,4,5,6,7,8,9,10,11,12,13 (牌顶)；
 * 问：原来那堆牌的顺序，用函数实现。
 * */

/**
 * 假设手牌为数组 origin, 桌面牌堆为数组 result;
 * origin: (牌顶) [] (牌底);
 * result: (牌顶) [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1] (牌底);
 * 正向的操作为: origin 拿出第一个插入 result 前面, origin 再拿出第一个换到自己的末尾, 如此重复;
 * 反向操作为: origin 最后一个放到自己的第一个前面, result 拿出第一个插入 origin 前面, 如此重复;
 * */

var list = /*(牌底)*/[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];/*牌顶*/

// todo 只用到了 pop 和 unshift ,其他都不用
function fn(result) {
    const origin = [];
    for (let i = 0; i < result.length; i++) {
        if (origin.length) {
            // 将最后一个取出来，放第一个
            origin.unshift(origin.pop());
        }
        origin.unshift(result[i])
    }
    return origin;
}

console.log(fn(list));
