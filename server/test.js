const axios = require('axios')



const url = 'https://www.zillow.com/search/GetSearchPageState.htm?searchQueryState={"mapBounds":{"west":-80.18744945526123,"east":-80.0824785232544,"south":25.74056594782679,"north":25.84172643246964},"isMapVisible":true,"filterState":{"sortSelection":{"value":"days"},"isAllHomes":{"value":true}},"isListVisible":true,"mapZoom":14,"regionSelection":[]}%26wants={"cat1":["listResults","mapResults"],"cat2":["total"],"regionResults":["regionResults"]}%26requestId=5'

const response = axios.get(url).then(
  res => console.log(res.data)
)
