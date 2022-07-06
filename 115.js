/**
 * 手写一个双向绑定
 *
 * */

`
<input id="input" type="text"/>
<div id="text"></div>
`
let input = document.getElementById("input");
let text = document.getElementById("text");

let data = {value: ""};

Object.defineProperty(data, "value", {
    set: function (val) {
        text.innerHTML = val;
        input.value = val;
    },
    get: function () {
        return input.value;
    }
});

// 这里很关键啊
// :::: 需要监听onkeyup事件
input.onkeyup = function (e) {
    data.value = e.target.value;
};
