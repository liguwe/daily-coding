new Promise(resolve => {
    setTimeout(() => {
        console.log(666);
        new Promise(resolve => {
            resolve();
        }).then(() => {
            console.log(777);
        })
    })
    resolve();
}).then(() => {
    new Promise(resolve => {
        resolve();
    }).then(() => {
        console.log(111);
    }).then(() => {
        console.log(222);
    });
}).then(() => {
    new Promise((resolve) => {
        resolve()
    }).then(() => {
        new Promise((resolve) => {
            resolve()
        }).then(() => {
            console.log(444)
        })
    }).then(() => {
        console.log(555);
    })
}).then(() => {
    console.log(333);
})

// 111 222


console.log(1);

setTimeout(() => {
    console.log('2')
}, 0)

new Promise((resolve, reject) => {
    console.log('3')
    throw new Error('err');
    resolve()
}).then(() => {
    console.log('4')
    setTimeout(() => {
        console.log('5')
    }, 0)
    new Promise((resolve, reject) => {
        console.log('6')
        resolve()
    }).then(() => {
        console.log('7')
    })
}).catch(() => {
    console.log(8)
})

console.log('9');
