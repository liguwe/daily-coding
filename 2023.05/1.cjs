import {reactive,effect} from "@vue/reactivity";

const obj = { foo: 1 };
effect(() => {
    console.log(obj.foo);
})
const p = reactive(obj);

p.foo = 2;
