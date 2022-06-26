let names = ["iPhone",'iPhone xs']
let colors = ['黑色','白色']
let storages = ['64g','256g']


let combine = function(...chunks){

    let res = []

    let helper = function(chunkIndex,prev){
        console.log('prev:',prev);
        let chunk = chunks[chunkIndex]
        let isLast = chunkIndex === chunks.length -1
        for(let val of chunk){
            let cur = prev.concat(val)
            if(isLast){
                // 如果已经处理到数组的最后一项 则把拼接的结果放入返回值中
                res.push(cur)
            }else{
                helper(chunkIndex+1,cur)
            }
        }
    }
    //从属性数组下标为0开始处理
    // 并且此时的prev是一个空数组
    helper(0,[])
    return res
}

console.log(combine(names,colors,storages));

