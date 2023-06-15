function MyFuncComp(props) {
    return {type: 'h1', children: props.title}
}

MyFuncComp.props = {
    title: 'default title'
}
