/**
 *字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
 示例一: 'abc' --> {value: 'abc'}
 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */

//// ::::方法1 ：使用"引用"
function fn(str) {

    //::::注意这个正则表达式啊
    let arr = str.split(/[\[\]]/).filter((item) => {
        return !!item
    });

    let res = {};
    // ::::使用中间变量，temp
    let temp = {};
    arr.forEach((item, index) => {
        if (index === 0) {
            // TODO 关键
            res.value = item;
            temp = res;
        } else {
            temp.children = {}
            temp.children.value = item
            //::::重新赋值temp
            temp = temp.children
        }
    })
    return res;

}


// 方法2 ：使用 reduce
function fn1(str) {
    //TODO 注意这个正则表达式啊
    let arr = str.split(/[\[\]]/).filter((item) => {
        return !!item
    });
    let res = {};
    arr.reduce((obj, item) => {
        obj.value = item;
        let children = {};
        obj.children = children;
        // 每次返回下一次引用的数据
        return children;
    }, res)

    return res;

}

// console.log(fn('[abc[bcd[def]]]'))
console.log(fn1('[abc[bcd[def]]]'))
// fn('abc')
