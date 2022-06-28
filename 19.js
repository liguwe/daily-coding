/**
 * url有三种情况
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33
 * https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33
 * 匹配elective后的数字输出（写出你认为的最优解法）:
 * [] || ['800'] || ['800','700']
 * */

function fn(url) {
    let reg = /elective=(.*)&/g
    let arr = reg.exec(url);
    let res = [];
    res = arr && arr[1] ? arr[1].split(',') : [];
    console.log(res);
}

fn('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33')
fn('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33')
fn('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33')


/**
 * 方法2
 * */
let params = new URLSearchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33');
console.log(params) //.get('elective')

//   URLSearchParams {
//      'https://www.xx.cn/api?keyword' => '',
//      'level1' => '',
//      'local_batch_id' => '',
//      'elective' => '',
//      'local_province_id' => '33' }

