async function a1 () {
    console.log('2')
    await a2()
    console.log('6')
}
async function a2 () {
    console.log('3')
}

console.log('1')

setTimeout(() => {
    console.log('10')
}, 0)

Promise.resolve().then(() => {
    console.log('7')
})

a1()

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('4')
})

promise2.then((res) => {
    console.log(8,res)
    Promise.resolve().then(() => {
        console.log('9')
    })
})
console.log('5')
