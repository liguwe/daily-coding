const obj = {foo: 1};

const p = new Proxy(obj, {
    deleteProperty(target, p) {
        console.log('delete property name:',p);
        return true;
    }
})

delete obj.foo;
console.log(obj.foo); // undefined
