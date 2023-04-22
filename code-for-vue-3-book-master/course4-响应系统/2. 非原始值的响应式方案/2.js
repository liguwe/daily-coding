const obj = {
    a: 1,
    get foo() {
        return this.a;
    }
};

console.log(Reflect.get(obj, 'foo', {a: 3}));

const obj = {
    foo: 1,
    get bar() {
        return this.foo
    }
}
