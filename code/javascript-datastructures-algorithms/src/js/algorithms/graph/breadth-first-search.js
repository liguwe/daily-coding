import Queue from '../../data-structures/queue';

const Colors = {
  WHITE: 0, // 表示该顶点还没有被访问。
  GREY: 1, //  表示该顶点被访问过，但并未被探索过
  BLACK: 2 //  表示该顶点被访问过且被完全探索过
};

// 以顶点为key，标记当前的颜色
const initializeColor = vertices => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};

// 深度访问
export const breadthFirstSearch = (graph, startVertex, callback) => {
  // 获取所有顶点
  const vertices = graph.getVertices();
  // 获取邻接点字典
  const adjList = graph.getAdjList();
  // 标记所有顶点为白色
  const color = initializeColor(vertices);
  // 创建一个队列
  const queue = new Queue();

  // 将开始访问的顶点入队
  queue.enqueue(startVertex);

  // 如果队列非空，执行以为步骤
  while (!queue.isEmpty()) {
    // 1、对首出队，并标注 它 为被发现的(灰色)
    const u = queue.dequeue();
    color[u] = Colors.GREY;
    // 2、获取对首所有相邻的点
    const neighbors = adjList.get(u);
    // 3、将出队的顶点所有标记颜色，遍历之
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      // 如果是白色，标记为灰色，并入队
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    // 4、标记为u已经被探索过了
    color[u] = Colors.BLACK;
    // 如果需要打印，在回调里调用
    if (callback) {
      callback(u);
    }
  }
};


/**
 * 使用 BFS 寻找最短路径
 * 问：给定一个图 G 和源顶点 v，找出每个顶点 u 和 v 之间最短路径的距离(以边的数量计)？
 * 对于给定顶点 v，广度优先算法会访问所有与其距离为 1 的顶点，接着是距离为 2 的顶点， 以此类推，所以带动广度优先搜索算法即可返回以下信息
 * 1、从 v 到 u 的距离 distances[u]
 * 2、前溯点 predecessors[u]，用来推导出从 v 到其他每个顶点 u 的最短路径
 * */
export const BFS = (graph, startVertex) => {

  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();

  const distances = {};
  const predecessors = {};

  queue.enqueue(startVertex);

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }

  return {
    distances,
    predecessors
  };
};

/**
 * distances: {A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3},
 * predecessors: {A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"}
 * 问：我们如何得到了从顶点 A 到图中其他顶点的最短路径(衡量标准是边的数量)，输出输出路径，
 * - 其实根据predecessors往前追溯即可，
 * - 比如计算A到I，那么predecessors[I] = E →  predecessors[E] = B → predecessors[B] = A  → predecessors[A] = null 结束
 *  A-B
 *  A-C
 *  A-D
 *  A-B-E
 *  A-B-F
 *  A-C-G
 *  A-D-H
 *  A-B-E-I
 * */

