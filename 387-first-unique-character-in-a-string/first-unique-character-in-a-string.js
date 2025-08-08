/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = new Array(26)
    for (let i = 0; i < 26; i++) {
        count[i] = 0
    }

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97
        count[index]++
    }

    for (let i = 0; i < s.length; i++) {
        let index = s.charCodeAt(i) - 97;
        if (count[index] === 1) {
            return i
        }
    }
    return -1
};