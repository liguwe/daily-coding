/*************************************************
 *
 * // :::: node b.js ==>
 * before import b
 * file:///Users/liguangwei/2022/fuckCode/100/d1/a.js:5
 * console.log("b is " + b)
 *                       ^
 *
 * ReferenceError: Cannot access 'b' before initialization
 *
 ************************************************/

console.log("before import a")
import {a} from "./a.js"

console.log("a is " + a)
export let b = a + 1;
