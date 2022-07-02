/*************************************************
 * 写一个防抖函数 => 比如resize/输入框sug ，不要频繁触发
 * 写一个节流函数 => 在单位时间内执行一次，比如图片懒加载，比如是否滚动底部加载下一页
 ************************************************/

/*************************************************
 * // 写一个防抖函数
 * // 执行最后一次
 ************************************************/
function fn1(fn, ms) {
    let id = null;
    return (...args) => {
        id && clearTimeout(id);
        id = setTimeout(() => {
            fn.apply(this, args);
            // fn.call(this, ...args);
        }, ms)
    }
}


/*************************************************
 * // 写一个节流函数
 * // 一段时间内触发一次
 ************************************************/
function fn2(fn, ms) {
    let start = new Date();
    return (...args) => {
        if (new Date() - start > ms) {
            start = new Date();
            fn.call(this, ...args);
        }
    }
}

function fn3(fn, ms) {
    let id = null;
    return (...args) => {
        // TODO 关键是变量ID，延迟回调就 id = null，否则就不能执行
        // 这个是
        if (!id) {
            id = setTimeout(() => {
                id = null;
                fn.apply(this, args);
            }, ms)
        }
    }
}
