/**************************************************************************
 * 判断对象是否循环引用
 * ***********************************************************************/

// 方法1 ，使用JSON.stringify获取错误信息来判断

// 方法2， 如下
const isCycleObject = (obj) => {
    const parentArr = [obj];
    for (let i in obj) {
        if (typeof obj[i] === 'object') {
            let flag = false;
            parentArr.forEach((pObj) => {
                if (pObj === obj[i]) {
                    flag = true;
                }
            })
            if (flag) return true;
            flag = isCycleObject(obj[i]);
            if (flag) return true;
        }
    }
    return false;
}
