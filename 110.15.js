/*************************************************
 * then(2) 、 then(Promise.resolve(3)) 发生了值穿透，直接执行最后一个 then ，输出 1
 ************************************************/

Promise.resolve(1)
    //// :::: then(2) 、 then(Promise.resolve(3)) 发生了值穿透，直接执行最后一个 then ，输出 1
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)


// :::: =>  输出1
