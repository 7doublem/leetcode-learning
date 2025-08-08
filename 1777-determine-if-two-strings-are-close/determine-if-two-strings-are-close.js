/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;

    let freq1 = {}
    let freq2 = {}

    for (let c of word1) {
        freq1[c] = (freq1[c] || 0) +1
    }

    for (let c of word2) {
        freq2[c] = (freq2[c] || 0) +1
    }

    let keys1 = Object.keys(freq1).sort()
    let keys2 =  Object.keys(freq2).sort()

    if (keys1.join('') !== keys2.join('')) {
        return false
    }

    let values1 = Object.values(freq1).sort((a, b) => a - b)
    let values2 = Object.values(freq2).sort((a, b) => a - b)

    for (let i = 0; i < values1.length; i++) {
        if (values1[i] !== values2[i]) return false
    }

    return true
};