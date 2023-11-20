
/**
 * ① Class Foo 提供了一个类型 Foo 到类型声明空间
 * ② 把一个类来当做变量传递时，ts 会把这个类当做值来处理
 * */
class Foo {
}

const someVar: Foo = Foo;


/**
 * ① 一些用 var 声明的变量，也只能在变量声明空间使用，不能用作类型注解，如下示例
 */
const foo = 123;
let bar: foo; // ts2749: 'foo' refers to a value, but is being used as a type here. Did you mean 'typeof foo'?
