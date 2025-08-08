/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const dictionary = {}
    const count = new Set()
    let result = new Array(words.length).fill("")

    for (let i = 0; i < 26; i++) {
        dictionary[alphabet[i]] = morse[i]
    }

    let j = 0;
    for (let i = 0; i < words.length; i++) {
        while(j < words[i].length) {
            result[i] += dictionary[words[i][j]]
            j++
        }

        j = 0
    }

    for (let i = 0; i < result.length; i++) {
        count.add(result[i])
    }
    
    return count.size
};