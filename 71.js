/*************************************************
 * 设计模式
 * 单例模式
 * :::单例模式的好处如下
 * 1、节省内存开销，比如登录场景
 * 2、使用单例模式进行命名空间，方便大型项目开发
 * 3、
 ************************************************/
function SingleDog(name) {
    this.name = name;
    this.instance = null;
}
// 也可以利用闭包来实现：
 SingleDog.getInstance = (function() {
     // 定义自由变量instance，模拟私有变量
     let instance = null;
     // :::返回一个函数，很关键，使用闭包来实现:::
     return function() {
         // 判断自由变量是否为null
         if(!instance) {
             // 如果为null则new出唯一实例
             instance = new SingleDog()
         }
         return instance
     }
 })()


class Single {
    show() {
        console.log('我是一个单例对象')
    }
    //
    static getInstance() {
        // 判断是否已经new过1个实例
        if (!Single.instance) {
            // 若这个唯一的实例不存在，那么先创建它
            Single.instance = new Single()
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return Single.instance
    }
}

