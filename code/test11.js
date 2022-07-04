function foo() {
    console.log( this.a );
}

function doFoo() {
    foo();
}

var obj = {
    a: 1,
    doFoo: doFoo
};

var a = 2;
obj.doFoo()
// 在Javascript中，this指向函数执行时的当前对象。
// 在执行foo的时候，执行环境就是doFoo函数，执行环境为全局。所以，foo中的this是指向window的，所以会打印出2

////////////////////////////////////////////////////////////////////////////////////////////////
var a = 10
var obj = {
    a: 20,
    say: () => {
        console.log(this.a)
    }
}
obj.say()

var anotherObj = { a: 30 }
obj.say.apply(anotherObj)


////////////////////////////////////////////////////////////////////////////////////////////////

