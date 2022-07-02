/**
 * 两个有序数组的中位数
 * https://code0xff.cn/post/2021/10/%E4%B8%A4%E4%B8%AA%E6%9C%89%E5%BA%8F%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0/#%E8%A7%A3%E6%B3%95%E4%B8%80
 * */
/**
 *
 *
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 *
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,3], nums2 = [2]
 * 输出：2.00000
 * 解释：合并数组 = [1,2,3] ，中位数 2
 * 示例 2：
 *
 * 输入：nums1 = [1,2], nums2 = [3,4]
 * 输出：2.50000
 * 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/median-of-two-sorted-arrays
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var fn = function (nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    let i = 0, j = 0;
    let newArr = [];

    // 直接合并就好了，然后再返回新数组
    while (i < m && j < n) {
        let item1 = nums1[i];
        let item2 = nums2[j];
        if (item1 > item2) {
            newArr.push(item2);
            j++;
        } else if (item1 < item2) {
            newArr.push(item1);
            i++;
        } else {
            newArr.push(item1);
            newArr.push(item2);
            i++;
            j++;
        }
    }

    if (m > i) {
        newArr = newArr.concat(nums1.slice(i, -1))
    }
    if (n > j) {
        newArr = newArr.concat(nums2.slice(j, n))
    }

    console.log(newArr);


};

fn([1, 2, 3, 4, 8], [1, 2, 7, 9])
