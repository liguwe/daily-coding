/**
 * 使用深度遍历和广度遍历思想实现一个深拷贝
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/10
 * */

const testObj = {
    a: 1,
    b: {
        c: 'c',
        d: ['d-1']
    },
    g: null,
}
testObj.e = testObj;
// 类型判断
const getType = (obj) => {
    return Object.prototype.toString.call(obj).slice(8, -1);
}

/**
 * 深度遍历 - 递归
 * */
function cloneByDFS(obj, map = new WeakMap()) {
    if (['String', 'Number', 'Boolean', 'Null', 'Function'].includes(getType(obj))) {
        return obj;
    }
    // todo 其实没太明白这里，为什么就能够自己返回？
    let newTarget = getType(obj) === 'Array' ? [] : {};
    // 查询map中是否有存在原对象（target），如果存在直接返回
    if (map.has(obj)) {
        return obj;
    }
    // 如果map中不存在原对象（target），则储存进map中
    // todo 为什么是这样的？
    console.log(typeof obj);
    map.set(obj, newTarget);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newTarget[key] = cloneByDFS(obj[key], map);
        }
    }
    return newTarget;
}

// console.log(cloneByDFS(testObj));

/**
 * 深度遍历 - 栈 - 遍历
 * */

function initTarget(o) {
    if (getType(o) === 'Object') {
        return {};
    }
    if (getType(o) === 'Array') {
        return [];
    }
    return o;
}

function cloneByDFS2(org) {
    let stack = [];
    // 记录出现过的对象，用于处理环
    let map = new WeakMap();
    let target = initTarget(org);

    if (target !== org) {
        stack.push([org, target]);
        map.set(org, target);
    }

    while (stack.length) {
        let [ori, tar] = stack.pop();
        for (let key in ori) {
            // 处理环状
            if (map.get(ori[key])) {
                tar[key] = map.get(ori[key]);
                continue;
            }

            tar[key] = initTarget(ori[key]);
            if (tar[key] !== ori[key]) {
                stack.push([ori[key], tar[key]]);
                map.set(ori[key], tar[key]);
            }
        }
    }

    return target;
}

/**
 * 广度遍历
 * */
function cloneByBFS() {

}
