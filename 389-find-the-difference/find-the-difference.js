/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const cnt = new Array(26).fill(0)

    for (let i = 0; i < s.length; i++) {
        const idx = s.charCodeAt(i) - 97
        cnt[idx]--
    }

    for (let i = 0; i < t.length; i++) {
        const idx = t.charCodeAt(i) - 97;
        cnt[idx]++
    }

    for (let i = 0; i < 26; i++) {
        if(cnt[i] === 1) return String.fromCharCode(97+i)
    }
};