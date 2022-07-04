// 111
// 222
// 333
// 444
// 555
// 666
// 777

// ::::同级的先清空，然后再到下一级

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
        console.log('111');
    }).then(() => {
        console.log('222');
    });

}).then(() => {

    new Promise((resolve) => {
        resolve()
    }).then(() => {
        // ::::又多了一层
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

