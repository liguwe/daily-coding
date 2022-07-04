/*
动态规划则是将问题分解成相互依赖的子问题。
1. 定义子问题
2. 实现要反复执行来解决子问题的部分
3. 识别并求解出基线条件
*/
/**
 * @param coins 最小硬币数
 * @param amount 找零的数字
 * */
function minCoinChange(coins, amount) {
  // 记忆化
  const cache = [];

  const makeChange = (value) => {
    if (!value) {
      return [];
    }
    if (cache[value]) {
      return cache[value];
    }

    let min = [];
    let newMin;
    let newAmount;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = value - coin;
      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }
      if (
        newAmount >= 0
        && (newMin.length < min.length - 1 || !min.length)
        && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[value] = min);
  };

  return makeChange(amount);
}

