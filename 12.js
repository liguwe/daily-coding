/*************************************************
 * 用 setTimeout 实现 setInterval，阐述实现的效果与setInterval的差异
 ************************************************/

function myInterval(fn, ms) {
    let timer;
    // todo 关键点
    const func = () => {
        // 每次进来时，清除
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            //// ::::关键点
            fn();
            func();
        }, ms)
    }

    func();

    // 返回清除定时器方法
    return {
        clear() {
            clearTimeout(timer)
        }
    }

}

let obj = myInterval(()=>{console.log('1')},500)

setTimeout(()=>{
    obj.clear();
},5000)
