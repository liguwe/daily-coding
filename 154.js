var tree = {
    age: 100,
    name: 'a',
    child: [
        {
            age: 88,
            name: 'b'
        },
        {
            age: 66,
            name: 'c',
            child: [
                {
                    age: 0,
                    name: 'd',
                    child: [
                        {
                            age: -1,
                            name: 'e'
                        }
                    ]
                }]
        }]
}

function howOld(name, tree) {
    let res = null;
    function dfs(tree, name) {
        for (const item of tree) {
            if (item.name === name) {
                res = item.age;
                return;
            }
            if (Array.isArray(item.child)) {
                dfs(item.child, name);
            }
        }
    }
    dfs([tree], name);
    return res;
}

console.log(howOld('a', tree)) // 88
console.log(howOld('e', tree)) // -1
console.log(howOld('f', tree)) // null
