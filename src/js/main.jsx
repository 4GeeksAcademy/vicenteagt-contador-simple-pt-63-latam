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
  counter++
  let generalSeconds = counter % 60
  let generalMinutes = Math.floor((counter / 60) % 60)
  let generalHours = Math.floor((counter / 3600))

  let firstDigit = generalSeconds % 10;
  let secondDigit = Math.floor(generalSeconds / 10);
  let threeDigit = generalMinutes % 10;
  let fourDigit = Math.floor(generalMinutes / 10);
  let fiveDigit = generalHours % 10;
  let sixDigit = Math.floor(generalHours / 10);




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

