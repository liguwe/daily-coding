// 非递归方式
function flatten(arr) {
    let str = arr.toString()
    return str.split(',');
}


// 递归方式
let res = [];

function flatten(arr) {
    if (!Array.isArray(arr)) {
        res = [...res, arr]
    } else {
        for (let i = 0; i < arr.length; i++) {
            flatten(arr[i]);
        }
    }
    return res;
}

// 递归方式
function flattenRes(arr) {
    let res = [];
    (function flatten(arr) {
        if (!Array.isArray(arr)) {
            res = [...res, arr]
        } else {
            for (let i = 0; i < arr.length; i++) {
                flatten(arr[i]);
            }
        }
    })()
    return res;
}