/*************************************************
 * // :::: 说说cjm/esm的区别
 * 1、引用不同：一个是值的拷贝(commonjs)，一个是值的引用（esm）
 *      循环引用时: 处理方式不同
 *        - CommonJS遇到循环依赖时，只会输出已经执行的部分，因为是拷贝，且会缓存起来，后面不能再影响前面的结果
 *              因为是缓存机制，避免了无限循环，但也会导致一些不容易察觉的错误，比如某个值undefined了
 *        - esm呢，因为是引用，取最后的值就好了
 *              esm模块加载机制根本不关心是否出现了循环应用，只是生成一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。
 *              解决方案两个：可以引入webpack打包插件检测：
 *                  1、使用export 函数
 *                  2、把他们放在一个文件里不就没问题了吗
 * 2、输出不同：
 *          commonjs必须在脚本执行完完后，才能确定输出
 *          esm是静态编译时就能确定输出了
 *
 * 3、同步加载 与 异步加载：
 *    node项目的代码即模块都在本地 ===>  所以 cjm 都是同步加载的
 *    浏览器的脚本都需要异步去请求后才能执行 ===> 所以都是异步加载的
 *
 ************************************************/





