function mountElement(vnode, container) {
    const el = vnode.el = createElement(vnode.type)
    if (typeof vnode.children === 'string') {
        setElementText(el, vnode.children)
    } else if (Array.isArray(vnode.children)) {
        vnode.children.forEach(child => {
            patch(null, child, el)
        })
    }

    if (vnode.props) {
        for (const key in vnode.props) {
            patchProps(el, key, null, vnode.props[key])
        }
    }

    insert(el, container)
}

function patchChildren(oldNode, newNode, container) {
    // 新节点是否是文本节点
    if (typeof newNode.children === 'string') {
        // 老节点是仅在是 是一组节点时，才需要遍历卸载
        if (Array.isArray(oldNode.children)) {
            oldNode.children.forEach((c) => unmount(c))
        }
        setElementText(container, newNode.children)
    //    新节点是一组节点
    } else if (Array.isArray(newNode.children)) {
        // 老节点是 一组节点
        if (Array.isArray(oldNode.children)) {
            oldNode.children.forEach(c => unmount(c))
            newNode.children.forEach(c => patch(null, c, container))
        } else {
            setElementText(container, '')
            newNode.children.forEach(c => patch(null, c, container))
        }
    } else {
        if (Array.isArray(oldNode.children)) {
            oldNode.children.forEach(c => unmount(c))
        } else if (typeof oldNode.children === 'string') {
            setElementText(container, '')
        }
    }
}
