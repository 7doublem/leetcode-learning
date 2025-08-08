/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

    const count = new Set()

    for (let i = 0; i < words.length; i++) {
        let morseWord = "";
        const w = words[i]

        for (let j = 0; j < w.length; j++) {
            morseWord += morse[w.charCodeAt(j) - 97]
        }
        count.add(morseWord)
    }

    return count.size
};