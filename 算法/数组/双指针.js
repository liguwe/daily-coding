/**
 * 删除有序数组中的重复项
 * */
var removeDuplicates = function (nums) {
    let slow = 0;
    let fast = 0;
    for (let i = 0; i < nums.length; i++) {
        fast = i;
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};


/**
 * 删除链表中的重复元素,没命中重复的时候，慢指针直接指向快指针
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/
 * */
var deleteDuplicates = function (head) {
    let slow = head;
    let fast = head;
    if (head === null) {
        return head;
    }
    while (fast !== null) {
        // 没命中重复的时候，慢指针直接指向快指针
        if (slow.val !== fast.val) {
            slow.next = fast;
            slow = slow.next;
        }
        fast = fast.next;
    }
    // 最后，slow需要指向null
    slow.next = null;
    return head;
};

/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 * https://leetcode.cn/problems/remove-element/
 * */
var removeElement = function (nums, val) {
    let fast = 0;
    let slow = 0;
    for (let [i, v] of nums.entries()) {
        if (v !== val) {
            nums[slow] = v;
            slow++;
        }
        fast = i;
    }
    return slow;
}

/**
 * 字符串中的最长回文字符串
 * */
// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
function palindrome(s, l, r) {
    while (
        l >= 0 && r < s.length //  防止索引越界
        && s[l] === s[r]) {
        // 向两边展开
        l--;
        r++;
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    // todo l+1 ? 为啥l??? 而不是l-1
    return s.substring(l + 1, r);
}

var longestPalindrome = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        // 以 s[i] 为中心的最长回文子串
        let s1 = palindrome(s, i, i);
        // 以 s[i] 和 s[i+1] 为中心的最长回文子串
        let s2 = palindrome(s, i, i + 1);

        if (s1.length > s2.length) {
            res = res.length > s1.length ? res : s1;
        } else {
            res = res.length > s2.length ? res : s2;
        }
    }
    return res;
};

/**
 * 反转字符串
 * */
var reverseString = function (s) {
    // 一左一右两个指针相向而行
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        // 交换 s[left] 和 s[right]
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
