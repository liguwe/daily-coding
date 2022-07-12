var p1 = new Promise((resolve, reject) => {
    resolve()
})

var p2 = new Promise((resolve, reject) => {
    resolve()
})

p1.then(() => {
    console.log(1)
}).then(()=>{
    console.log(2)
}).then(()=>{
    console.log(5)
})


p2.then(() => {
    console.log(3)
}).then(()=>{
    console.log(4)
})
