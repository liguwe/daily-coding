var o = {
    f1: function () {
        console.log(this);
        var f2 = function () {
            console.log(this);
        }();
    }
}

o.f1()
// Object
// Window
// 结果运行后，第一层指向对象o，第二层指向全局对象


// 严格模式下，如果函数内部的this指向顶层对象，就会报错。

var counter = {
    count: 0
};
counter.inc = function () {
    'use strict';
    this.count++
};
var f = counter.inc;
f()
// TypeError: Cannot read property 'count' of undefined



var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        });
    }
}

o.f()
// undefined a1
// undefined a2

// 解决这个问题的一种方法，就是前面提到的，使用中间变量固定this。
var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
        var that = this;
        this.p.forEach(function (item) {
            console.log(that.v+' '+item);
        });
    }
}

o.f()
// hello a1
// hello a2

// 另一种方法是将this当作foreach方法的第二个参数，固定它的运行环境。
var o = {
    v: 'hello',
    p: [ 'a1', 'a2' ],
    f: function f() {
        this.p.forEach(function (item) {
            console.log(this.v + ' ' + item);
        }, this);
    }
}

o.f()
// hello a1
// hello a2
