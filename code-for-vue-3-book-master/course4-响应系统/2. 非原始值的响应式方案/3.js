const obj = {foo: 1}
const p = new Proxy(obj, {
    deleteProperty(target, key) {
        console.log('deleteProperty',key);
        // ::::Reflect.deleteProperty() 方法会删除对象的指定属性，返回一个布尔值，表示是否删除成功。
        return Reflect.deleteProperty(target, key)
    }
})
console.log(p.foo)
delete p.foo
console.log(p.foo)

