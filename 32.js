/**
 * 实现一个 promise.race
 * 实现一个 promise.all
 * */

// 那个快，使用哪个
// Promise.race([p3,p4]).then(res => {
//     console.log(res)
// }).catch(rej => {
//     console.log(rej)  //p3失败了...
// })

Promise._race = (tasks) => {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(resolve => {
                resolve(resolve)  // 某一promise完成后直接返回其值
            }).catch(e => {
                reject(e)  //如果有错误则直接结束循环，并返回错误
            })
        }
    })
}


Promise._all = (tasks) => {

    return new Promise((resolve,reject) => {
        let length = arr.length  //传入的promise的个数
        let count = 0  // 进入fullfilled 的promise个数
        const result = []  //创建一个等长的数组,放置结果
        // 当传递是一个空数组，返回一个为fulfilled状态的promise
        if(arr.length === 0 ) {
            return new Promise.resolve([]);
        }
        for(let i = 0; i < arr.length; i++){
            arr[i].then(resolve => {
                // todo 这里是关键逻辑
                result[i] = resolve //将每次结果保存在result数组中
                count ++  //个数加1
                //是否所有的promise都进入fullfilled状态
                if(count === length){
                    resolve(result)  //返回结果
                }
            }).catch(e => {
                reject(e)  //如果有错误则直接结束循环，并返回错误
            })
        }
    })

}
