/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealthiest = 0
    for (let i = 0; i < accounts.length; i++) {
        let wealthCheck = 0

        for (let j = 0; j < accounts[i].length; j++) {
            wealthCheck += accounts[i][j]
        }

        if (wealthCheck > wealthiest) {
            wealthiest = wealthCheck
        }
    }
    return wealthiest
};