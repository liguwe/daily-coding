var a = 10;
(function () {
    console.log(a) // undefied
    a = 5
    console.log(window.a) // 10
    var a = 20
    console.log(a)  // 20
})()


var b = 10;
(function b() {
    b = 20;
    console.log(b)
})()


// const test = {
//     a: 1,
//     b: 2,
//     c: 3
// }

const ObjMap = (obj, fn) => {
    const keys = Object.keys(obj)
    for (let i =0 ; i < keys.length; i++) {
        obj[keys[i]] = fn(obj[keys[i]])
    }
    return obj
}
console.log(ObjMap(test, item => item += 1))
