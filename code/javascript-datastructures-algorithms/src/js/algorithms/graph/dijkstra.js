// 二位数组
let graph = [
  //    0  1  2  3  4  5
  /* 0 */[0, 2, 4, 0, 0, 0],    //  A → C ，都是 Col 到 Row
  /* 1 */[0, 0, 2, 4, 2, 0],
  /* 2 */[0, 0, 0, 0, 3, 0],
  /* 3 */[0, 0, 0, 0, 0, 2],
  /* 4 */[0, 0, 0, 3, 0, 2],
  /* 5 */[0, 0, 0, 0, 0, 0]
];

let graph2 = [
  //      0  1  2  3  4
  /* 0 */[0, 5, 2, 6, 0],    //  A → C ，都是 Col 到 Row
  /* 1 */[0, 0, 0, 0, 1],
  /* 2 */[0, 0, 0, 3, 5],
  /* 3 */[0, 0, 0, 0, 2],
  /* 4 */[0, 0, 0, 0, 0],
]

const INF = Number.MAX_SAFE_INTEGER;

const getMinDistanceIndexFromDist = (dist, visited) => {
  let min = INF; // 无限大
  let minIndex = -1;
  for (let v = 0; v < dist.length; v++) {
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v];
      minIndex = v;
    }
  }
  return {minIndex, min};

};

/**
 * @params graph 二维数组
 * @params src  代表下标
 * */
const dijkstra = (graph, src) => {
  // 到所有顶点的所有距离数组
  const dist = [];
  // 是否已访问过
  const visited = [];
  // 把所有的距离(dist)初始化为无限大
  const {length} = graph;
  for (let i = 0; i < length; i++) {
    dist[i] = INF;
    visited[i] = false;
  }
  // 源顶点到自己的距离肯定为 0 啊
  dist[src] = 0;

  for (let i = 0; i < length - 1; i++) {
    // 要计算顶点间的 minDistance，就要搜索 dist 数组中的最小值，返回它在数组中的索引
    const {minIndex, min} = getMinDistanceIndexFromDist(dist, visited);
    visited[minIndex] = true;
    console.log(`以位置【${minIndex}】，值为【${min}】 的源点去访问更新 dist:${JSON.stringify(dist)}`)
    for (let v = 0; v < length; v++) {
      if (!visited[v]  // 还没访问过
        && graph[minIndex][v] !== 0  // 当前最小值的位置作为标识，访问其他顶点，如果不为0则更新，
        && dist[minIndex] !== INF  //   dist数组中，最小值的位置不为无穷大时
        && dist[minIndex] + graph[minIndex][v] < dist[v]
      ) {
        console.log('满足更新条件', 'i:', i, 'v:', v, 'dist[minIndex]:', dist[minIndex], 'graph[minIndex][v]:', graph[minIndex][v], 'dist[v]:', dist[v]);
        dist[v] = dist[minIndex] + graph[minIndex][v];
      }

    }
    console.log('*******************************************************************')
  }

  return dist;

};

const dist = dijkstra(graph2, 0);
console.log(dist);


