/*************************************************
 * 版本号排序
 *
 ************************************************/
//// ::::方法一： 直接使用sort 不行
    // :::: 但有bug,比如下面 '2.3.3' > ''2.10.1''
const arr = ['0.1.1', '2.3.3', '0.302.1', '0.5.1', '4.2', '4.3.5', '4.3.4.5', '2.10.1'];
arr.sort((a, b) => a > b ? -1 : 1);


console.log(arr); // ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']

//// ::::方法二： 通过加权重的办法，比如先补齐版本号，然后分别Math.pow(x,10)


//// ::::方法三： ，遍历，自己实现吧

function fn1(arr) {

    let maxLen = 0;
    arr = arr.map((item) => {
        let a = item.split('.');
        maxLen = Math.max(maxLen, a.length);
        return item.split('.');
    })

    arr.sort((a, b) => {
        let res = 0;
        for (let i = 0; i < maxLen; i++) {
            let aa = Number(a[i] || 0);
            let bb = Number(b[i] || 0);
            // :::: 遍历，不等于时，直接比较
            if (aa !== bb) {
                res = bb - aa;
                break;
            }
        }
        return res;
    })

    console.log(arr);

}

fn1(arr);
