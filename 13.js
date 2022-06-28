/**
 * 第 130 题：输出以下代码执行结果，大致时间就好（不同于上题） #253
 * */

function wait() {
    return new Promise(resolve =>
        setTimeout(resolve, 2 * 1000)
    )
}

async function main() {
    console.time();
    await wait();
    await wait();
    await wait();
    // default: 6.005s
    console.timeEnd();
}

main();

/**
 * 变种
 * */
function wait() {
    return new Promise(resolve =>
        setTimeout(resolve, 10 * 1000)
    )
}

// 先说结果，大概30秒多点，30秒是因为每个等待10秒，同步执行。
async function main() {
    console.time();
    let a = wait();
    let b = wait();
    let c = wait();
    await a;
    await b;
    await c;
    console.timeEnd();
}
main();
