/**
 * 第 121 题：统计 1 ~ n 整数中出现 1 的次数。 #237
 * */
function fn(n) {
    let c = 0;
    for (let i = 1; i <= n; i++) {
        let s = `${i}`;
        s.split('').forEach((item)=>{
            if(Number(item) === 1){
                c++;
            }
        })
    }
    return c;
}



// todo 或者  match也行
console.log("11112111".match(/1/g).length)

console.log(fn(100))
