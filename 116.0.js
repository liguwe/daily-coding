/*************************************************
 * fib数列
 ************************************************/


function fib1(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fib1(n - 1) + fib1(n - 2)
}


function fib2(n) {
    let memo = new Array(n + 1).fill(-1);
    memo[1] = 1;
    memo[2] = 1;
    if (memo[n] > 0) {
        return memo[n];
    }
    for (let i = 3; i < memo.length + 1; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n];
}

function fib3(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    let prev = 1, curr = 1;
    for (let i = 0; i < n; i++) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}

