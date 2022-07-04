let ss = '[abc[bcd[def]]]'
var list = ss.match(/\w+/g)
console.log(list);
// [ 'abc', 'bcd', 'def' ]
