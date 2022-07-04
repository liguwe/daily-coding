/*************************************************
 * todo 实现一个时分秒倒计时
 * 1、给一个时间，返回距离现在右后多少年、多少月、多少天
 * 2、setTimeout
 ************************************************/


function fn1(endTime) {
    let e = new Date(endTime).valueOf();
    let now = Date.now().valueOf();
    let arr = [];
    if (e >= now) {
        let val = e - now;
        let msSpan = 1000;
        let minSpan = 60 * msSpan;
        let hourSpan = 60 * minSpan;
        let daySpan = 24 * hourSpan;
        let yearSpan = 365 * daySpan;

        let y = Math.floor(val / yearSpan);
        let d = Math.floor((val - y * yearSpan) / daySpan);
        let h = Math.floor((val - y * yearSpan - d * daySpan) / hourSpan);
        let m = Math.floor((val - y * yearSpan - d * daySpan - h * hourSpan) / minSpan);
        let s = Math.floor((val - y * yearSpan - d * daySpan - h * hourSpan - m * minSpan) / 1000);

        y && arr.push(y + '年');
        d && arr.push(d + '天');
        h && arr.push(h + '小时');
        m && arr.push(m + '分钟');
        s && arr.push(s + '秒');
    }
    return arr.join('');
}


setInterval(()=>{
    console.log(fn1('2023-7-9 12:33'))
},1000)

