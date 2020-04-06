var maxProfit = function(prices) {
    let minPriceIndex = 0
    let max = 0
    for (let i = 0; i < prices.length; i++) {
      let currentPrice = prices[i]
      let minPrice = prices[minPriceIndex]
      if (currentPrice < minPrice)
        minPriceIndex = i
      else
        max = Math.max(max, currentPrice - minPrice)
    }
    return max
  }

  console.log(maxProfit([7,1,5,3,6,4]))