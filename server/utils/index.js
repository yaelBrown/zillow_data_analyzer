const ZillowListing = require('../models/zillowListing')

module.exports = {
  test: () => console.log('data.js is working'),
  process: (resData) => {
    const out = []
    resData.forEach(e => {
      if (e.hdpData.homeInfo.rentZestimate !== undefined) {
        const temp = new ZillowListing(
          e.id,
          e.imgSrc,
          e.detailUrl,
          e.statusType,
          e.unformattedPrice,
          e.address,
          e.area,
          e.hdpData.homeInfo.rentZestimate
        )
        out.push(temp)
      }
    })
    return out
  }
}