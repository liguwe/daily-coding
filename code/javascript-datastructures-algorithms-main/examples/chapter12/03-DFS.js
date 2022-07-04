// 有向图
class Graph {
  constructor() {
    // 用一个数组来存储图中所有顶点的名字
    this.vertices = [];
    // 所有顶点的入度
    this.inDegree = new Map();
    // 所有顶点的出度
    this.outDegree = new Map();
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.inDegree.set(v, []);
      this.outDegree.set(v, []);
    }
  }

  addEdge(a, b) {
    if (!this.inDegree.get(a)) {
      this.addVertex(a);
    }
    if (!this.inDegree.get(b)) {
      this.addVertex(b);
    }
    this.outDegree.get(a).push(b);
    this.inDegree.get(b).push(a);
  }

  getOutDegree = () => {
    return this.outDegree;
  }
  getInDegree = () => {
    return this.inDegree;
  }


}

const graph = new Graph(true); // 有向图
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');


// 拓扑排序
const sort = (graph) => {
  // 获取邻接点字典
  const inDegreeMap = graph.getInDegree();
  const outDegreeMap = graph.getOutDegree();
  // 存放所有入度为0的队列
  const inDegreeZeroQueue = [];
  const inDegreeLen = {};

  for (let [key, value] of inDegreeMap.entries()) {
    if (value.length === 0) {
      inDegreeZeroQueue.push(key)
    }
    inDegreeLen[key] = value.length;
  }

  //所有入度为 0 的节点都被放入res中，它们就是可以作为拓扑排序最前面的节点，并且它们之间的相对顺序是无关紧要的，排序结果
  const res = [];

  while (inDegreeZeroQueue.length) {
    // 1、对首出队
    let u = inDegreeZeroQueue.shift();
    res.push(u)

    // 2、获取改点的所有出度  →  然后把它的入度 - 1
    const outDegree = outDegreeMap.get(u);
    console.log(outDegree);

    outDegree.forEach((v) => {
      inDegreeLen[v] -= 1;
      if (inDegreeLen[v] === 0) {
        inDegreeZeroQueue.push(v)
      }
    })
  }

  console.log(res);

  return res;
}

console.log(sort(graph));
