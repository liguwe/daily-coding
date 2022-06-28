/**
 * 第 160 题：输出以下代码运行结果，为什么？
 * 如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法 #389
 *
 * */

const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 1000)
    })
}

function test() {
    list.forEach(async x=> {
        const res = await square(x)
        console.log(res)
    })
}
test()

////////////////////////////////////////// => 修改如下
console.log('test1:');
async function  test1() {
    for(let x of list){
        const res = await square(x)
        console.log(res)
    }
}
test1()

console.log('test3:');
async function test3() {
    for (let i = 0; i < list.length; i++) {
        let x = list[i]
        const res = await square(x)
        console.log(res)
    }
}
test3()
