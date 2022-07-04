import {describe, expect, test, beforeAll, beforeEach} from '@jest/globals'
import RangeList from "./index";

describe('RangeList', () => {
    let rl = null;
    let insertRange = null;
    beforeAll(() => {
        rl = new RangeList();
        insertRange = RangeList.insertRange;
    })

    // test static methond - insertRange
    test('insertRange test 1', () => {
        let nums = [[1, 8]],
            range = [10, 11],
            expectRes = [[1, 8], [10, 11]];
        let res = insertRange(nums, range);
        expect(res).toEqual(expectRes);
    });
    test('insertRange test 2', () => {
        let nums = [[1, 8], [20, 25]],
            range = [12, 30],
            expectRes = [[1, 8], [12], [20, 25], [30]];
        let res = insertRange(nums, range);
        expect(res).toEqual(expectRes);
    });
    test('insertRange test 3', () => {
        let nums = [[1, 8], [20, 25]],
            range = [7, 25],
            expectRes = [[1, 7, 8], [20, 25, 25]];
        let res = insertRange(nums, range);
        expect(res).toEqual(expectRes);
    });
    test('insertRange test 4', () => {
        let nums = [[1, 8], [20, 25]],
            range = [-1, 0],
            expectRes = [[-1, 0], [1, 8], [20, 25]];
        let res = insertRange(nums, range);
        expect(res).toEqual(expectRes);
    });


    // test add add method
    test('rl.add([1, 5]) ', () => {
        rl.add([1, 5])
        expect(rl.toStr()).toBe('[1, 5)');
    });
    test('rl.add([10, 20]) ', () => {
        rl.add([10, 20])
        expect(rl.toStr()).toBe('[1, 5) [10, 20)');
    });
    test('rl.add([20, 20]) ', () => {
        rl.add([20, 20]);
        expect(rl.toStr()).toBe('[1, 5) [10, 20)');
    });
    test('rl.add([20, 21])', () => {
        rl.add([20, 21]);
        expect(rl.toStr()).toBe('[1, 5) [10, 21)');
    });
    test('rl.add([2, 4])', () => {
        rl.add([2, 4]);
        expect(rl.toStr()).toBe('[1, 5) [10, 21)');
    });
    test('rl.add([3, 8])', () => {
        rl.add([3, 8]);
        expect(rl.toStr()).toBe('[1, 8) [10, 21)');
    });

    // test remove method
    test('rl.remove([10, 10])', () => {
        rl.remove([10, 10]);
        expect(rl.toStr()).toBe('[1, 8) [10, 21)');
    });
    test('rl.remove([10, 11])', () => {
        rl.remove([10, 11]);
        expect(rl.toStr()).toBe('[1, 8) [11, 21)');
    });
    test('rl.remove([15, 17])', () => {
        rl.remove([15, 17]);
        expect(rl.toStr()).toBe('[1, 8) [11, 15) [17, 21)');
    });
    test('rl.remove([3, 19])', () => {
        rl.remove([3, 19]);
        expect(rl.toStr()).toBe('[1, 3) [19, 21)');
    });


    test('rl.add([30, 35])', () => {
        rl.add([30, 35]);
        expect(rl.toStr()).toBe('[1, 3) [19, 21) [30, 35)');
    });
    test('rl.add([-30, -15])', () => {
        rl.add([-30, -15]);
        expect(rl.toStr()).toBe('[-30, -15) [1, 3) [19, 21) [30, 35)');
    });

    test('rl.add([0, 0])', () => {
        rl.add([0, 0]);
        expect(rl.toStr()).toBe('[-30, -15) [1, 3) [19, 21) [30, 35)');
    });

    test(' rl.add([1, 1])', () => {
        rl.add([1, 1]);
        expect(rl.toStr()).toBe('[-30, -15) [1, 3) [19, 21) [30, 35)');
    });
    test('rl.remove([30, 35])', () => {
        rl.remove([30, 35]);
        expect(rl.toStr()).toBe('[-30, -15) [1, 3) [19, 21)');
    });
    test('rl.remove([-30, -20])', () => {
        rl.remove([-30, -20])
        expect(rl.toStr()).toBe('[-20, -15) [1, 3) [19, 21)');
    });

    // test error params
    test('rl.add([2]) throws error: Parameter is not a valid RangeType!', () => {
        expect(() => {
            rl.add([2]);
        }).toThrow();
    });
    test('rl.remove([22,11]) throws error: Parameter is not a valid RangeType!', () => {
        expect(() => {
            rl.remove([22, 11]);
        }).toThrow();
    });
    // test clear methond
    test('rl.clear()', () => {
        rl.clear();
        expect(rl.toStr()).toBe('');
    });
    // test size method
    test('rl.size()', () => {
        expect(rl.size()).toBe(0);
    });

});



