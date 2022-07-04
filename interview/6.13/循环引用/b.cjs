// m2.js
import {foo} from './m1.cjs';
console.log(foo);
setTimeout(() => console.log(foo), 500);