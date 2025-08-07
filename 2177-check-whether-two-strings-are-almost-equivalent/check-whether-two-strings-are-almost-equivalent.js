/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let word1Frequency = new Array(26)
    let word2Frequency = new Array(26)

    for (let i = 0; i < 26; i++) {
        word1Frequency[i] = 0
        word2Frequency[i] = 0
    }

    for(let i = 0; i < word1.length; i++) {
        let code1 = word1.charCodeAt(i)
        let code2 = word2.charCodeAt(i)
        if (code1 >= 97 && code1 <= 122) {
            word1Frequency[code1 - 97]++
        }
        if (code2 >= 97 && code2 <= 122) {
            word2Frequency[code2 - 97]++
        }
    }

    for (let i = 0; i < 26; i++) {
        const diff = word1Frequency[i] - word2Frequency[i]
        if (diff > 3 || diff < - 3) {
            return false
        }
    }
    return true
};