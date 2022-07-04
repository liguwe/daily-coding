
console.log(1);

setTimeout(() => {
    console.log(5);

    process.nextTick(() => {
        console.log(7);
    });

    new Promise((resolve) => {
        console.log(6);
        resolve();
    }).then(() => {
        console.log(8);
    });
});

new Promise((resolve) => {
    console.log(2);
    resolve();
}).then(() => {
    console.log(3);
});


process.nextTick(() => {
    console.log(4);
});


// ::::这里有两个settimeout ，完全分开吧，虽然时间都是 0ms
setTimeout(() => {
    console.log(9);

    process.nextTick(() => {
        console.log(11);
    });

    new Promise((resolve) => {
        console.log(10);
        resolve();
    }).then(() => {
        console.log(12);
    });
});
