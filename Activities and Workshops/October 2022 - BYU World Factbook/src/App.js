import { useLayoutEffect, useState } from "react"
import Root from "./Components/Root/index"
import Links from "./Components/Links/index"
import './index.css';

function App() {

  useLayoutEffect(() => {
    // fetch(`https://countryapi.io/api/capital/berlin`)
    //   .then((response) => response.json())
    //   .then(json => {
    //     setCountries(json)
    //   })
    // fetch()
  }, []);
  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>BYU World Factbook</h1>
      <Links />
      <Root />
    </div>
  )
}

export default App;
