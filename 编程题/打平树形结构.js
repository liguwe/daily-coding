let ss = [
    {
        id: '1',
        name: '1',
        pid: '0',
        children: [
            {
                id: '1-1',
                name: '1-1',
                pid: '1',
            },
            {
                id: '1-2',
                name: '1-2',
                pid: '1',
                children: [
                    {
                        id: '1-2-1',
                        name: '1-2-1',
                        pid: '1-2',
                    }
                ]
            }
        ]
    },
    {
        id: '2',
        name: '2',
        pid: '0',
        children: [
            {
                id: '2-1',
                name: '2-1',
                pid: '2',
            }
        ]
    }
]

let res = [];

function flatten(arr) {
    arr.forEach((item, index) => {
        if (item.children && item.children.length) {
            flatten(item.children)
            res.push(item)
            delete item.children;
        } else {
            res.push(item)
        }
    });
    return res;
}

console.log(flatten(ss))




