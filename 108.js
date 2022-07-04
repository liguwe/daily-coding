/**
 *
 * @description 实现一个批量请求函数 multiRequest(urls, maxNum)
 *
 * 要求最大并发数 maxNum
 * 每当有一个请求返回，就留下一个空位，可以增加新的请求
 * 所有请求完成后，结果按照 urls 里面的顺序依次打出
 * 返回调用cancel 直接取消
 *
 *
 */
// 模拟请求
function request(url) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(url), 1000);
    });
}


function multiRequest(urls = [], maxNum) {
    const total = urls.length
    const result = new Array(total).fill(false);
    let count = 0 // 进行到第几个
    let cancel = null;
    let promise = new Promise((resolve, reject) => {
        // TODO 关键，如何调用cancel直接取消
        cancel = () => reject('cancel');
        // 第一次，添加最大并发数目，再之后，每次finally后就添加一个，就能够保证一直是5个并发数
        while (count < maxNum) {
            next()
        }

        // 下一个请求
        function next() {
            const current = count++
            if (current >= total) {
                !result.includes(false) && resolve(result)
                return
            }
            // 或者直接使用原生fetch函数
            request(urls[current]).finally((res) => {
                result[current] = res
                if (current < total) {
                    next()
                }
            })
        }
    })

    return {promise, cancel}
}

let urls = []
for (let i = 0; i < 20; i++) {
    urls.push(`https://api.github.com/search/users?q=${i}`)
}

multiRequest(urls, 5);
