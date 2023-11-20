

class A {
}

interface B {
}

type C = {};


let a: A;
let b: B;
let c: C;


const b1 = B; // ts2693: 'B' only refers to a type, but is being used as a value here.
const c1 = C; // ts2693: 'C' only refers to a type, but is being used as a value here.

