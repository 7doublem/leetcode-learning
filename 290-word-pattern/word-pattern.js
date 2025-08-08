/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const patternArr = pattern.split('')
    const sArr = s.trim().split(/\s+/)

    if(patternArr.length !== sArr.length) {
        return false
    }

    const map = Object.create(null)
    const usedWords = Object.create(null)

    for (let i = 0; i < patternArr.length; i++) {
        let letter = patternArr[i]
        let word = sArr[i]

        if(map[letter] !== undefined) {
            if (map[letter] !== word) {
                return false
            }
        } else {
            if(usedWords[word]) {
                return false
            } 
            map[letter] = word
            usedWords[word] = true
        }
    }

    return true;
};