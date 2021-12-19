import React, { useState } from 'react'
import './App.css';

function App() {
  const initialState = {
    jsonData: "",
    yesHpd: false,
    noHpd: false
  }
  
  const [state, setState] = useState(initialState)

  const handleAnalyze = () => {
    let data = JSON.parse(state.jsonData).cat1.searchResults.mapResults
    
    let yes = [];
    let no = [];

    setState({...state, yesHps: yes, noHps: no})
    data.map((e, i) => {
      if ('hdpData' in e) {
        let fsPrice = e.price
        e.price = parseInt(e.price.slice(1).replace(",",""))
        e.price = e.price - (e.price * .20)
        e.price = e.price * 3
        e.price = e.price / 360
        yes.push({
          idx: i,
          img: e.imgSrc, 
          priceToRental: e.hdpData.homeInfo.rentZestimate - e.price,
          moPrice: e.price,
          fsPrice,
          rentZestimate: e.hdpData.homeInfo.rentZestimate,
          address: (e.detailUrl).split('/')[2],
          url: `http://www.zillow.com${e.detailUrl}`,
          zpid: e.zpid
      })
    } else {
        let fsPrice = e.price
        no.push({
          idx: i,
          img: e.imgSrc, 
          priceToRental: (((((e.price - (e.price * .2)) / 360 ) * .82) * 100) + ((e.price * 1.12) / 360)) - e.rentZestimate,
          moPrice: (e.price / 360),
          fsPrice,
          rentZestimate: e.rentZestimate,
          address: (e.detailUrl).split('/')[2],
          url: `http://www.zillow.com${e.detailUrl}`,
          zpid: e.zpid
      })
    }})
    
    let temp = []
    yes.map((e) => {
      if (isNaN(e.priceToRental)) {
        no.push(e)
      } else {
        temp.push(e)
      }
    })

    yes = temp

    yes.sort((a, b) => b.priceToRental - a.priceToRental)

    setState({...state, yesHps: yes, noHps: no})
    console.log(state)
  }

  const handleChange = (event) => {
    setState({...state, jsonData: event.target.value})
  }

  return (
    <div className="App">
      <div id="title">
        <h1>Zillow Data Search</h1>
        <small>By: Yael Brown</small>
      </div>
      <div id="top">
        <textarea onChange={handleChange} value={state.jsonData} rows="10"/>
        <button onClick={() => handleAnalyze()}>Analyze JSON</button>
      </div>
      <hr/>
      <table>
        <thead>
          <tr>
            <th>idx</th>
            <th>image</th>
            <th>diff.</th>
            <th>price</th>
            <th>rentalEst.</th>
            <th>address</th>
            <th>zid</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
          {state.yesHpd || (<tr></tr>)}
          {state.noHpd || (<tr></tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
