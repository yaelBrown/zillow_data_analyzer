/* 
  Monthly Payment Reference: 
    var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
*/

class ZillowListing {
  constructor(id, imgSrc, detailUrl, statusType, price, address, area, rentZestimate) {
    this.id = id
    this.imgSrc = imgSrc
    this.detailUrl = detailUrl
    this.statusType = statusType
    this.price = price
    this.address = address
    this.area = area
    this.rentZestimate = rentZestimate
    this.interestRate = .06626
    this.profit = this.rentZestimate - ((this.price * this.interestRate) / (1 - (Math.pow((1 + this.interestRate), 360 * -1))))
  }
}

module.exports = ZillowListing