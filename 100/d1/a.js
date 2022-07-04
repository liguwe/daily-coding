/*************************************************
 *
 * // :::: node a.js =>
 * before import a
 * file:///Users/liguangwei/2022/fuckCode/100/d1/b.js:4
 * console.log("a is " + a)
 * ReferenceError: Cannot access 'a' before initialization
 *
 ************************************************/

console.log("before import b")

import {b} from "./b.js"

console.log("b is " + b)
export let a = b + 1;
