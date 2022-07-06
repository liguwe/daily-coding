/**
 *
 * 下面的代码什么情况下打印1
 * var a = ?; 能保证下面log 出 1
 *
 * // ::::注意下面都是==，不是全等于
 * if(a == 1 && a == 2 && a == 3){
 *  	console.log(1);
 * }
 * */

// var a = {};
// Object.defineProperty(a,{
//


let a = [1,2,3];
a.toString = a.shift;

if( a == 1 && a == 2 && a == 3 ) {
    console.log(1);
}

///// 或者
var a = {num:0};
a.valueOf = function(){
    return ++a.num
}
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

// 或者
let a = {
    i: 1,
    toString () {
        return a.i++
    }
}


// 使用window
//TODO 注意一定是window全局对象
Object.defineProperty(window, 'a', {
    get: function() {
        if (this.value) {
            return this.value += 1
        } else {
            return this.value = 1;
        }
    }
});
