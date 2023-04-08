// 用一个全局变量存储当前激活的 effect 函数
let activeEffect
function effect(fn) {
    // 当调用 effect 注册副作用函数时，将副作用函数复制给 activeEffect
    activeEffect = fn
    // 执行副作用函数
    fn()
}

const obj = { text1: 'text1', text2: 'text2' };
const obj2 = { text1: 'text1', text2: 'text2' };

effect(function fn1() {
    console.log(obj.text1);
})

effect(function fn2() {
    console.log(obj.text2);
})

/*************************************************
 * :::: 以上代码的映射关系如下
 * obj
 *  text1: fn1
 *  text2: fn2
 ************************************************/

effect(function fn3() {
    console.log(obj.text1);
    console.log(obj.text2);
})
/*************************************************
 * :::: 以上代码的映射关系如下
 * obj
 *  text1: fn3
 *  text2: fn3
 ************************************************/

effect(function fn1() {
    console.log(obj.text1);
})

effect(function fn2() {
    console.log(obj2.text2);
})

/*************************************************
 * :::: 以上代码的映射关系如下
 * obj
 *   text1: fn1
 * obj2
 *   text2: fn2
 ************************************************/
