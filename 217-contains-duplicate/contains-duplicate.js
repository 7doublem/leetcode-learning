/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {}

    for (let num of nums) {
        if (num in map) return true
        map[num] = 0
    }
    console.log(map)
    return false
};