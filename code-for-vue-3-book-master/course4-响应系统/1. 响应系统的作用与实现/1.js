const data = {foo: 1};
const obj = new Proxy(data, {});

effect(
    () => {
        console.log(obj.foo);
    }
);

obj.foo++;
obj.foo++;
obj.foo++;
obj.foo++;

// ::::顺序就可以变成 1 2 3 4 5 6 ...



