var date = new Date()

console.log(1, new Date() - date)

setTimeout(() => {
    console.log(4, new Date() - date)
}, 500)

//// :::: 这里有个坑，因为是表达式，所以直接执行了
Promise.resolve().then(console.log(2, new Date() - date))

while (new Date() - date < 1000) {

}

console.log(3, new Date() - date)

