/**
 *
 * do(1, (err, data) => {
 *     if (err) {
 *         console.error(err)
 *     }
 *     console.log(data)
 * })
 * // 封装一个函数doA实现以下调用方式
 * doA(1).then(data => {}).catch(err => {})
 *
 *
 * */

function daA(param) {
    return new Promise((resolve, reject) => {
        dos(param, (err, data) => {
            if (err) {
                reject(err);
                console.error(err)
            }
            resolve(data);
            // console.log(data)
        })
    })
}
