Promise._all = function (tasks) {
    let res = [];
    let c = 0;
    return new Promise((resolve, reject) => {
        for (let item of tasks) {
            // 包一层，以兼容非promise的情况
            Promise.resolve(item).then((r) => {
                res.push(r);
                c++;
                if (c === tasks.length) {
                    resolve(res);
                }
            }).catch((e) => {
                reject(e);
            })
        }

    })
}


Promise._race = function (tasks) {

    let res = [];
    let c = 0;
    return new Promise((resolve, reject) => {

        for (let item of tasks) {
            Promise.resolve(item).then((r) => {
                    return resolve(r);
                }
            ).catch((e) => {
                reject(e);
            })
        }

    })
}
