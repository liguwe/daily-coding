/*************************************************
 * 139、判断对象是否循环引用
 ************************************************/

// ::::方法一：两个数组，标识父级的数组parent，
// 把所有是对象的字段都放在一个数组中，遍历数组是否有相等的。

function cycle(obj, parent) {
    //表示调用的父级数组
    // ::::关键
    var parentArr = parent || [obj];
    // ::::然后遍历，递归
    for (let i in obj) {
        if (typeof obj[i] === "object") {
            // 判断是否有循环引用
            parentArr.forEach((pObj) => {
                if (pObj === obj[i]) {
                    obj[i] = "[cycle]"
                }
            });
            cycle(obj[i], [...parentArr, obj[i]])
        }
    }
    return obj;
}



// ::::方法二：
// weakSet来标识是否已经有了，注意把平级检测完成之后，将当前对象删除，防止误判

const isCyclic = (obj) => {
    let stackSet = new WeakSet()
    let detected = false
    const detect = (obj) => {
        // 不是对象类型的话，可以直接跳过
        if (obj && typeof obj != 'object') {
            return
        }
        // 当要检查的对象已经存在于stackSet中时，表示存在循环引用
        if (stackSet.has(obj)) {
            return detected = true
        }
        // 将当前obj存如stackSet
        stackSet.add(obj)
        for (let key in obj) {
            // 对obj下的属性进行挨个检测
            if (obj.hasOwnProperty(key)) {
                detect(obj[key])
            }
        }
        // 平级检测完成之后，将当前对象删除，防止误判
        /*
          例如：对象的属性指向同一引用，如果不删除的话，会被认为是循环引用
          let tempObj = {
            name: '前端胖头鱼'
          }
          let obj4 = {
            obj1: tempObj,
            obj2: tempObj
          }
        */
        stackSet.delete(obj)
    }

    detect(obj)

    return detected
}
