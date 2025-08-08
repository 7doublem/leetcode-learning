/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapS = new Array(128).fill(0)
    const mapT = new Array(128).fill(0)

    
    for (let i = 0; i < s.length; i++) {
        const c1 = s.charCodeAt(i)
        const c2 = t.charCodeAt(i)

        if (mapS[c1] !== mapT[c2]) {
            return false
        }

        mapS[c1] = i + 1
        mapT[c2] = i + 1
    }
    return true
};