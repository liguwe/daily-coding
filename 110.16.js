
// ::::睡眠函数 - 占住资源
function sleep(ms, line) {
    let startTime = new Date()
    // ::::占住资源
    while (new Date() - startTime < ms) {

    }
    console.log('sleep 1s  ', line)
}


setTimeout(() => {
    console.log('1-1')
    setTimeout(() => {
        console.log('1-1-1')
        sleep(1000, 13)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('1-2')
        new Promise(resolve => resolve()).then(() => {
            console.log('1-3')
        })
    })
    sleep(1000, '21')
})

setTimeout(() => {
    console.log('2')
    setTimeout(() => {
        console.log('2-1-1')
        sleep(1000, 28)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('2-1')
        new Promise(resolve => resolve()).then(() => {
            console.log('2-2')
        })
    })
    sleep(1000, 36)
})
