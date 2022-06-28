/**
 * 第 158 题：如何模拟实现 Array.prototype.splice #384
 * */

Array.prototype.splice = Array.prototype.splice || function (start, deleteCount, ...addList) {
    if (start < 0) {
        if (Math.abs(start) > this.length) {
            start = 0
        } else {
            start += this.length
        }
    }

    if (typeof deleteCount === 'undefined') {
        deleteCount = this.length - start
    }

    // todo this.slice
    const removeList = this.slice(start, start + deleteCount)
    const right = this.slice(start + deleteCount)

    // TODO 重新修改this -> 原数组 ，即加入addlist数组片段 + right剩余的数组片段
    let addIndex = start
    addList.concat(right).forEach(item => {
        this[addIndex] = item
        addIndex++
    })
    this.length = addIndex

    return removeList
}
