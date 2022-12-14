/**
 * 写个程序把 entry 转换成如下对象 #212
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



function fn(obj) {
    let res = {};
    Object.keys(obj).forEach((k) => {
        let arr = k.split('.');
        arr.reduce((prev, next, index) => {
            if (index === arr.length - 1) {
                prev[next] = obj[k];
                return;
            }
            if (!prev.hasOwnProperty(next)) {
                prev[next] = {};
            }
            return prev[next];
        }, res)
    })

    return res;
    // console.log('res:', JSON.stringify(res));
}

fn(entry)

