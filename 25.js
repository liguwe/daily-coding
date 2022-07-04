
/*************************************************
 * 编程题，根据以下要求，写一个数组去重函数
 *  [123, "meili", "123", "mogu", 123]
 *          则输出：[123, "meili", "123", "mogu"]
 *  [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"]，
 *         则输出：[123, [1, 2, 3], [1, "2", 3], "meili"]
 *  [123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]
 *         则输出：[123, {a: 1}, {a: {b: 1}}, {a: "1"}, "meili"]
 ************************************************/


function fn(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let itemStr = JSON.stringify(item);
        if (!map.get(itemStr)) {
            map.set(itemStr, true);
        }
    }
    console.log([...map.keys()]);
    return map.keys();

}

function isObj(obj) {
    return Object.prototype.toString.call(obj).includes('Object');
}

// 对象重整 对key进行排序
function parseObj(obj) {
    // TODO 有bug ，需要把对象按照key值排序
    let keys = Object.keys(obj).sort()
    let newObj = {}
    for (let key of keys) {
        // 不晓得有没有有必要，反正把value为obj的情况也处理一下 - -
        obj[key] = isObj(obj[key]) ? parseObj(obj[key]) : obj[key]
        newObj[key] = obj[key]
    }
    return newObj
}


fn([123, {a: 1}, {a: {b: 1}}, {a: "1"}, {a: {b: 1}}, "meili"]);
