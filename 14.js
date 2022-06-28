/**
 * 第 111 题：编程题，写个程序把 entry 转换成如下对象 #206
 * */
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}

function fn(obj) {
    let res = {};

    function traverse(obj, keys) {
        for (let [k, v] of Object.entries(obj)) {

            keys.push(k);

            if (typeof v === 'string' || typeof v === 'number') {
                res[keys.join('.')] = v;
            } else {
                traverse(v, keys);
            }

            keys.pop();

        }
    }

    traverse(obj, []);
    return res;

}

console.log(fn(entry))

// 要求转换成如下对象
var output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}
