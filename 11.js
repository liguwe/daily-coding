/**
 * 第 134 题：求两个日期中间的有效日期 #264
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/264
 * 如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9...】
 * */
let start = new Date('2015-2-8').valueOf();
let end = new Date('2015-3-3').valueOf();

function fn(s, e) {
    for (let i = s; i <= e; i = i + (24 * 60 * 60 * 1000)) {
        let d = new Date(i);
        console.log(d.getFullYear());
        console.log(d.getMonth() + 1);
        // todo 获取日期的方式是getDate()
        console.log(d.getDate());
    }
}

fn(start, end);
