/*************************************************
 * 实现 classNames 库的能力
 *
 * classNames('BFE', 'dev', 100)
 * // 'BFE dev 100'
 *
 * classNames(
 *   null, undefined, Symbol(), 1n, true, false
 * )
 * // ''
 *
 * const obj = new Map()
 * obj.cool = '!'
 *
 * classNames({BFE: [], dev: true, is: 3}, obj)
 * // 'BFE dev is cool'
 *
 * classNames(['BFE', [{dev: true}, ['is', [obj]]]])
 * // 'BFE dev is cool'
 ************************************************/


function classNames(...args) {
    let arr = [];
    for (let item of args) {
        // :::: 必须if/else if ,一个经验是尽量这么写，别分开，不然可能会重复命中
        if (typeof item === "string" || typeof item === "number") {
            arr.push(item);
        } else if (Array.isArray(item)) {
            // :::: 彻底打平，然后把它放到args参数里面去
            item.flat(Infinity).forEach((it) => {
                args.push(it);
            })
        }
        // :::: 这里需要过滤掉 null
        else if (typeof item === "object" && item !== null) {
            Object.entries(item).forEach(([k, v]) => {
                arr.push(k)
            })
        }
    }

    return arr;

}


console.log(
    // :::: BigInt 可以表示任意大的整数。1n是一种表达方式， 1n == 1 相等
    classNames(
        null, undefined, Symbol(), 1n, true, false
    ) || ''
)

console.log(
    classNames('BFE', 'dev', 100)
)


const obj = new Map()
obj.cool = '!'

// 'BFE dev is cool'
console.log(
    classNames({BFE: [], dev: true, is: 3}, obj)
)

console.log(
    classNames(['BFE', [{dev: true}, ['is', [obj]]]])
)
