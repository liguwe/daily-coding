class LazyManClass {
    constructor(name) {
        this.taskList = [];
        this.name = name;
        console.log(`Hi I am ${this.name}`);
        setTimeout(() => {
            this.next();
        }, 0);
    }

    eat(name) {
        var that = this;
        var fn = (function (n) {
            return function () {
                console.log(`I am eating ${n}`)
                that.next();
            }
        })(name);
        this.taskList.push(fn);
        return this;
    }

    sleepFirst(time) {
        var that = this;
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(`等待了${t}秒...`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.unshift(fn);
        return this;
    }

    sleep(time) {
        var that = this
        var fn = (function (t) {
            return function () {
                setTimeout(() => {
                    console.log(`等待了${t}秒...`)
                    that.next();
                }, t * 1000);
            }
        })(time);
        this.taskList.push(fn);
        return this;
    }

    next() {
        var fn = this.taskList.shift();
        fn && fn();
    }
}

function LazyMan(name) {
    return new LazyManClass(name);
}

LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(4).eat('junk food');


// 如何设计实现无缝轮播
// scroll the notice
useEffect(() => {
    const requestAnimationFrame =
        window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    const cancelAnimationFrame =
        window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame

    const scrollNode = noticeContentEl.current
    const distance = scrollNode.clientWidth / 2

    scrollNode.style.left = scrollNode.style.left || 0
    window.__offset = window.__offset || 0

    let requestId = null
    const scrollLeft = () => {
        const speed = 0.5
        window.__offset = window.__offset + speed
        scrollNode.style.left = -window.__offset + 'px'
        // 关键行：当距离小于偏移量时，重置偏移量
        if (distance <= window.__offset) window.__offset = 0
        requestId = requestAnimationFrame(scrollLeft)
    }
    requestId = requestAnimationFrame(scrollLeft)

    if (pause) cancelAnimationFrame(requestId)
    return () => cancelAnimationFrame(requestId)
}, [notice, pause])


function add() {
    let args = [].slice.call(arguments);
    let fn = function () {
        let fn_args = [].slice.call(arguments)
        return add.apply(null, args.concat(fn_args))
    }
    fn.toString = function () {
        return args.reduce((a, b) => a + b)
    }
    return fn
}

add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3);// 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6

//id 代表部门编号，name 是部门名称，parentId 是父部门编号，为 0 代表一级部门，
// 现在要求实现一个 convert 方法，把原始 list 转换成树形结构，
// parentId 为多少就挂载在该 id 的属性 children 数组下，结构如下：
let list = [
    {id: 1, name: '部门A', parentId: 0},
    {id: 2, name: '部门B', parentId: 0},
    {id: 3, name: '部门C', parentId: 1},
    {id: 4, name: '部门D', parentId: 1},
    {id: 5, name: '部门E', parentId: 2},
    {id: 6, name: '部门F', parentId: 3},
    {id: 7, name: '部门G', parentId: 2},
    {id: 8, name: '部门H', parentId: 4}
];

function convert(list) {
    let result = [];
    let map = new Map();
    list.forEach((item) => {
        map.set(item.id, item);
    });
    list.forEach(el => {
        let parent = map.get(el.parentId);
        if (!parent) {
            el.children = []
            return
        }
        if (parent.hasOwnProperty('children')) {
            parent.children.push(el);
        } else {
            parent['children'] = [];
            parent.children.push(el);
        }
    });

    for (let i = 0; i < list.length; i++) {
        const el = list[i];
        if (el.parentId === 0) {
            result.push(el)
        }
    }
    return result
}

function convert(source, parentId = 0) {
    let trees = [];
    for (let item of source) {
        if (item.parentId === parentId) {
            let children = convert(source, item['id']);
            if (children.length) {
                item.children = children
            }
            trees.push(item);
        }
    }
    return trees;
}

console.log(convert(list))



