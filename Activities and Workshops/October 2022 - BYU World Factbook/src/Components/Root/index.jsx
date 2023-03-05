import countries from "../../data/countries.json"
import flags from "../../data/flags.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CountryPage from "../CountryPage/index"


const Links = props => {
    return (
        <Router>
            <Routes>
                {
                    countries.map((country, index) => {
                        return (
                            <Route key={index} path={country.code} element={<CountryPage countryName={country.name} country={country} flag={Object.entries(flags).filter(flag => flag[0] === country.code)} />} />
                        )
                    })
                }
            </Routes>
        </Router>

    )
}

export default Links
