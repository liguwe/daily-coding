

console.log("before import b")

import {b} from "./b.js"

console.log("b is " + b)
export let a = b + 1;
// :::: 这里也会执行，哪怕是上面已经export了，这里需要注意
console.log(a);
