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

// 要求转换成如下对象
var output = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae'
}


function fn(obj) {
    let res = {};

    function traverse(obj, keys) {
        //::::基准条件
        if(typeof obj === 'string'){
            res[keys.join('.')] = obj;
            return;
        }
        Object.entries(obj).forEach(([k, v]) => {
            keys.push(k);
            traverse(v,keys);
            keys.pop();
        })
    }

    traverse(obj, []);

    console.log(res);
    return res;

}

console.log(fn(entry))


