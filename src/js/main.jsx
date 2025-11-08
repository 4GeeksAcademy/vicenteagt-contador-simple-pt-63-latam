import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';




let counter = 0

setInterval(() => {
  let firstDigit = Math.floor((counter / 1) % 60);
  let secondDigit = Math.floor((counter / 60) % 10);
  let threeDigit = Math.floor((counter / 60) % 10);
  let fourDigit = Math.floor((counter / 1000) % 10);
  let fiveDigit = Math.floor((counter / 10000) % 10);
  let sixDigit = Math.floor((counter / 100000) % 10);
  counter++


  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     
     
      <Home
        digitOne={firstDigit}
        digitTwo={secondDigit}
        digitThree={threeDigit}
        digitFour={fourDigit}
        digitFive={fiveDigit}
        digitSix={sixDigit}
      />
     
     
    </React.StrictMode>,
  )
}, 1000)

