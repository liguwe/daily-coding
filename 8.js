/**
 * 第174题：如何判断url中只包含qq.com #474
 *     http://www.qq.com  // 通过
 *
 *     http://www.qq.com.cn  // 不通过
 *
 *    http://www.qq.com/a/b  // 通过
 *
 *    http://www.qq.com?a=1  // 通过
 *
 *    http://www.123qq.com?a=1  // 不通过
 * */

function fn(url) {
    let reg = /^https?:\/\/\w*\.qq\.com[^.]*/;
    return reg.test(url);
}

let arr = ['http://www.qq.com', 'http://www.qq.com.cn', 'http://www.qq.com/a/b', 'http://www.qq.com?a=1', 'http://www.123qq.com?a=1']
arr.forEach((item) => {
    console.log(item, ':', fn(item))
})
