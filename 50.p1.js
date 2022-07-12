var fn = function (nums1, nums2) {
    let m = nums1.length,
        n = nums2.length;
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
    // ::::判断是否走完了
    if (m > i) {
        newArr = newArr.concat(nums1.slice(i, -1))
    }
    if (n > j) {
        newArr = newArr.concat(nums2.slice(j, n))
    }
    console.log(newArr);
};
