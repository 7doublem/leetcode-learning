/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xStr = x.toString(); // turning the number into a string to push into array
    const xIntoArrF = xStr.split(""); // splitting the elements of the string into an array
    const xIntoArrB = []; //empty backwards array

    console.log(xIntoArrF)

    //loop over xIntoArrF array backwards, and push those values into new array
    for(let i = xIntoArrF.length - 1; i >= 0; i--) {
        xIntoArrB.push(xIntoArrF[i]);
    }
    console.log(xIntoArrB)

    const back = parseInt(xIntoArrB.join(''));
    console.log(back)
    
    if (back === x) {
        return true;
    } else {
        return false;
    }
};