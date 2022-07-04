
Promise.resolve(1)
    .then(res => {
        console.log(res);
        //// :::: 返回 return 2 实际上是包装成了 resolve(2)
        return 2;
    })
    .catch(err => {
        return 3;
    })
    .then(res => {
        console.log(res);
    });
