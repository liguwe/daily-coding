function sleep(time, line) {
    let startTime = new Date()
    while (new Date() - startTime < time) {

    }
    console.log('1s over', line)
}

setTimeout(() => {
    console.log('setTimeout - 1')
    setTimeout(() => {
        console.log('setTimeout - 1 - 1')
        sleep(1000, 13)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 1 - then')
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 1 - then - then')
        })
    })
    sleep(1000, '21')
})

setTimeout(() => {
    console.log('setTimeout - 2')
    setTimeout(() => {
        console.log('setTimeout - 2 - 1')
        sleep(1000, 28)
    })
    new Promise(resolve => resolve()).then(() => {
        console.log('setTimeout - 2 - then')
        new Promise(resolve => resolve()).then(() => {
            console.log('setTimeout - 2 - then - then')
        })
    })
    sleep(1000, 36)
})