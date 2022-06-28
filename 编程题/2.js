/**
 * 1,2,3,5,7,8,9 => 1~3,5,7~9
 * */
function fn(str) {
    let arr = str.split(',').map(Number);
    let len = arr.length;
    let s = new Array(len).fill(false);
    s[0] = arr[0];
    for (let i = 0; i < len; i++) {
        let item = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (prev && next && item === prev + 1 && next !== item + 1) {
            s[i] = `~${arr[i]},`;
        }
        if (prev && next && item !== prev + 1) {
            s[i] = `,${arr[i]}`;
        }
        if(i === len - 1){
            if(arr[i]-arr[i-1] === 1){
                s[i] = `~${arr[i]},`
            }
        }
    }
    console.log(s);

    return s.filter(Boolean).join('')

}

console.log(fn('1,2,3,5,7,8,9'));
