const obj = {foo: 1}

const p = new Proxy(obj, {
    get() {
        return obj.foo
    },
    set(target, key, value) {
        obj[key] = value
    }
})

console.log(p.foo)
p.foo++
console.log(p.foo)


// 函数调用的拦截

const fn = (name) => {
    console.log('我是：', name)
}

const p2 = new Proxy(fn, {
    apply(target, thisArg, argArray) {
        target.call(thisArg, ...argArray)
    }
})

p2('hcy')


const obj2 = {foo: 1};

console.log(obj2.foo); // 1

console.log(Reflect.get(obj2, 'foo'));// 1




// TypeError: Cannot read property 'foo' of undefined
