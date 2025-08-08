/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let counta = 0
    let countb = 0
    let mid = s.length / 2

    for (let i = 0; i < mid; i++) {
        if (vowels.has(s[i])) counta++
        if (vowels.has(s[i + mid])) countb++
    }
    return counta === countb
};