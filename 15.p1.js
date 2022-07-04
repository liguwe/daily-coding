/**
 * 第 112 题：编程题，写个程序把 entry 转换成如下对象 #212
 * */
var entry = {
    'a.b.c.dd': 'abcdd',
    'a.d.xx': 'adxx',
    'a.e': 'ae',
}

// 要求转换成如下对象
var output = {
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


let res = {};

function fn(obj) {
    let res = {};
    Object.entries(obj).forEach(([k, v]) => {
        let keys = k.split('.');
        keys.reduce((prev, next, index, array) => {
            // ::::最后一项，直接赋值了
            if (array.length - 1 === index) {
                prev[next] = obj[k];
                return;
            }
            // ::::没有这个属性值，则添加
            if (!prev.hasOwnProperty(next)) {
                prev[next] = {};
            }
            return prev[next]
        }, res)
    })

    console.log(JSON.stringify(res));
}

fn(entry)

