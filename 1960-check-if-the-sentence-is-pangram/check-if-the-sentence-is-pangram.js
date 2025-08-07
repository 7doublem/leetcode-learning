/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let check = new Set()

    for (let c of sentence) {
        check.add(c)
    }

    if (check.size === 26) {
        return true
    }
    return false
};