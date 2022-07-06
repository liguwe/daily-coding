/**
 * 手写一个双向绑定 使用proxy
 * */

`
<input id="input" type="text"/>
<div id="text"></div>
`
let input = document.getElementById("input");
let text = document.getElementById("text");

let data = {value: ""};


new Proxy(data, {
    /**
     * @param target 指向data
     * @param p 属性值，比如value
     * */
    get(target, p, receiver) {
        return input.value;
    },
    set(target, p, value, receiver) {
        target[p] = value;
        // ::::直接做渲染,更好做法是写一个render函数放外面去
        text.innerHTML = target[p];
        input.value = target[p];
    }
})

// 这里很关键啊
// :::: 需要监听onkeyup事件
input.onkeyup = function (e) {
    data.value = e.target.value;
};
