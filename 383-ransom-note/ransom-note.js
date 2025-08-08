/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = new Array(26)
    for (let i = 0; i < 26; i++) {
        count[i] = 0
    }

    for (let i = 0; i < magazine.length; i++) {
        const index = magazine.charCodeAt(i) - 97
        count[index]++
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const index = ransomNote.charCodeAt(i) - 97
        if (count[index] === 0) {
            return false
        }
        count[index]--
    }

    return true
};