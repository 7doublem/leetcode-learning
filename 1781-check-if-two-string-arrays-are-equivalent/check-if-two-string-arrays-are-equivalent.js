/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {

    let i1 = 0, j1 = 0
    let i2 = 0, j2 = 0

    while (i1 < word1.length && i2 < word2.length) {
        let c1 = word1[i1][j1]
        let c2 = word2[i2][j2]

        if (c1 !== c2) {
            return false
        }

        j1++
        if (j1 === word1[i1].length) {
            i1++ 
            j1 = 0
        }

        j2++
        if (j2 === word2[i2].length) {
            i2++
            j2 = 0
        }
    }

    return i1 === word1.length && i2 === word2.length
    
};