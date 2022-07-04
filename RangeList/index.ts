/**
 * @description Class RangeList
 * A pair of integers define a range
 * for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
 * for example: [1, 3) [7, 9). This range includes integers: 1, 2 , 7 , 8.
 * */

// Array of two integers that specify beginning and end of range.
type RangeType = Array<number>;

export default class RangeList {

    private items: Array<RangeType>;

    constructor() {
        this.items = [];
    }

    /**
     * Adds a range to the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
     */
    add(range: RangeType) {
        if (this.size() === 0) {
            this.items.push(range);
            return;
        }
        let addedRange = RangeList.insertRange(this.items, range);
        if (addedRange.every((item) => item.length === 2)) {
            this.items = addedRange;
            return;
        }

        let pos = [];
        for (let i = 0; i < addedRange.length; i++) {
            let item = addedRange[i];
            if (item.length === 1) {
                pos.push(i);
            }
            if (item.length === 3) {
                pos.push(i);
            }
            if (item.length === 4) {
                pos.push(i);
            }
        }
        let [i, j] = pos;
        j = j || i;
        let begin = addedRange[i][0];
        let end = addedRange[j][addedRange[j].length - 1];
        if (pos.length === 2) {
            addedRange.splice(i, j - i);
            addedRange[i] = [begin, end];
        }
        if (pos.length === 1) {
            addedRange[i] = [begin, end];
        }
        addedRange = addedRange.filter((item) => item[0] !== item[1])
        this.items = addedRange;
    }

    /**
     * insert a range into the range list
     * @param nums  the range array list
     * @param {Array<number>} range - range to be inserted
     * @return {Array<RangeType>} Returns two-dimensional array  that has been inserted
     * @example
     * nums = [ [ 1, 8 ]] , range= [7, 10]  => [ [ 1, 7, 8 ], [ 10 ] ]
     * nums = [ [ 1, 8 ] ] , range= [10, 11]  => [ [ 1, 8 ], [ 10, 11] ]
     * nums = [ [ 1, 8 ] , [20 , 25] ] , range= [12, 30]  => [[ 1, 8 ] ,[12], [20,25], [30] ]
     * nums = [ [1, 3], [7, 10], [15, 20] ] , range=[5, 12]  => [[1, 3], [5] , [7,10], [12], [15, 20]]
     */
    static insertRange(nums: Array<RangeType>, range: RangeType): Array<RangeType> {
        let [first, second] = range;
        if (!(Number.isInteger(first) && Number.isInteger(second) && second >= first)) {
            throw 'Parameter is not a valid RangeType!';
        }
        if (second < nums[0][0]) {
            nums.unshift(range);
            return nums;
        }
        if (first > nums[nums.length - 1][1]) {
            nums.push(range);
            return nums;
        }
        // insert first element of range
        for (let i = 0; i < nums.length; i++) {
            let [begin, end] = nums[i];
            let nextBegin = nums[i + 1] ? nums[i + 1][0] : null;
            if (i === 0 && first < begin) {
                nums.unshift([first]);
                break;
            } else if (nextBegin && first < nextBegin && first > end) {
                nums.splice(i + 1, 0, [first]);
                break;
            } else if (first >= begin && first <= end) {
                nums[i] = [begin, first, end];
                break;
            }
        }
        // insert second element of range
        for (let j = 0; j < nums.length; j++) {
            let begin = nums[j][0];
            let end = nums[j][nums[j].length - 1];
            let nextBegin = nums[j + 1] ? nums[j + 1][0] : null;
            if (nextBegin && second < nextBegin && second >= end) {
                nums.splice(j + 1, 0, [second]);
                break;
            } else if (second >= begin && second <= end) {
                nums[j] = [...nums[j], second].sort((a, b) => a - b);
                break;
            } else if (j === nums.length - 1 && second > end) {
                nums.push([second]);
                break;
            }
        }
        return nums;
    };


    /**
     * Removes a range from the list
     * @param {Array<number>} range - Array of two integers that specify beginning and end of range
     */
    remove(range: RangeType) {
        let removedRange = RangeList.insertRange(this.items, range);
        let pos = [];
        for (let i = 0; i < removedRange.length; i++) {
            let item = removedRange[i];
            if (item.length === 1) {
                pos.push(i);
            }
            if (item.length === 3) {
                pos.push(i);
            }
            if (item.length === 4) {
                pos.push(i);
            }
        }
        let [i, j] = pos;
        if (pos.length === 1 && removedRange[i].length === 4) {
            let [ele1, ele2, ele3, ele4] = removedRange[i];
            removedRange.splice(i, 1, [ele1, ele2], [ele3, ele4]);
        } else if (pos.length === 2) {
            if (removedRange[i].length === removedRange[j].length) {
                if (removedRange[i].length === 1) {
                    removedRange.splice(i, j - i + 1);
                } else if (removedRange[i].length === 3) {
                    removedRange[i] = [removedRange[i][0], removedRange[i][1]];
                    removedRange[j] = [removedRange[j][1], removedRange[j][2]];
                    removedRange.splice(i + 1, j - i - 1);
                }
            } else if (removedRange[i].length > removedRange[j].length) {
                removedRange[i] = [removedRange[i][0], removedRange[i][1]];
                removedRange.splice(i + 1, j - i);
            } else if (removedRange[i].length < removedRange[j].length) {
                removedRange[j] = [removedRange[j][1], removedRange[j][2]];
                removedRange.splice(i, j - i);
            }
        }
        removedRange = removedRange.filter((item) => item[0] !== item[1])
        this.items = removedRange;
    }


    /**
     * return length of the list
     * */
    size() {
        return this.items.length;
    }

    /**
     * clear the range
     * */
    clear() {
        this.items = [];
    }

    /**
     * returns a string representing the ranges
     * @example
     *  this.item = [[1, 5]] => "[1, 5)"
     *  this.item = [[1, 5], [5, 10]] => "[1, 5) [5, 10)"
     * */
    toStr() {
        let items = this.items,
            itemsStr = "";
        for (let item of items) {
            itemsStr += `[${item[0]}, ${item[1]}) `
        }
        return itemsStr.trim();
    }

    /**
     * Prints out the list of ranges in the range list
     */
    print() {
        console.log(this.toStr());
    }
}





