var sort = function (nums, lo, hi) {
    /*************************************************
     * ::::前序位置::::
     ************************************************/
    // 通过交换元素构建分界点 p
    var p = partition(nums, lo, hi);

    sort(nums, lo, p - 1);
    sort(nums, p + 1, hi);
};
