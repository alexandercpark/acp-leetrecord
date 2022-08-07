/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowestPrice = Infinity;
    let maxProfit = 0;
    
    for(let price of prices) {
        lowestPrice = Math.min(lowestPrice, price);
        maxProfit = Math.max(maxProfit, price - lowestPrice);
    }
    
    return maxProfit;
};
