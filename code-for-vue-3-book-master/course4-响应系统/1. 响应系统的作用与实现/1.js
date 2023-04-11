const data = {foo: 1};
const obj = new Proxy(data, {});
effect(
    () => {
        console.log(obj.foo); // ::::立即执行
    }
);

// ::::添加 options.lazy = true, 使得 effect 不会立即执行 ?
effect(
    () => {
        console.log(obj.foo); // ::::不立即执行
    },
    // ::::options.lazy = true 时不立即执行
    {lazy: true}
);


let activeEffect
const effectStack = []
function effect(fn, options = {}) {
    const effectFn = () => {
        cleanup(effectFn)
        activeEffect = effectFn
        effectStack.push(effectFn)
        effectStack.pop()
        activeEffect = effectStack[effectStack.length - 1]
    }
    effectFn.options = options
    effectFn.deps = []
    // :::: 执行副作用函数
    if (!options.lazy) {
        effectFn()
    }
    // ::::options.lazy = true , 不立即执行，返回 effectFn
    return effectFn
}

const fn1 = effect(
    () => {
        console.log(obj.foo);
    },
    {lazy: true}
);

fn1();// ::::手动执行



// ::::有没有一定计算属性的影子？？
const sumFn = effect(
    () => {
        return obj.a + obj.b;
    },
    {lazy: true}
);
const sum = sumFn();

effect(() => {
    console.log(obj.foo);
})

function watch(source,cb) {
    effect(() => {
        console.log(source.foo);
    },{
        scheduler: () => {
            cb()
        }
    })
}

