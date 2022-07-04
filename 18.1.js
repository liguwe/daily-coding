let arr = ['abc', 'bcd', 'def', 'gfg', 'ccc'];


// ::::很简洁吧！！！

let res = {};
arr.reduce((prev, next, index, array) => {
    console.log(prev, next, index);
    prev.value = next;
    // ::::除了最后一个，都返回prev.children
    if (array.length - 1 !== index) {
        prev.children = {}
        return prev.children;
    }
}, res)


