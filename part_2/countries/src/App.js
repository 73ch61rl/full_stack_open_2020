import React, { useState, useEffect } from 'react'
import FilterCountries from './components/FilterCountries'
import Countries from './components/Countries'
import CountriesService from './services/CountriesService'

const App = () => {
  const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([])

  useEffect(() => {
    CountriesService
      .getAllCountries('')
      .then(countries => setCountries(countries))
  }, [])
  return (
    <div>
      {
        countries.length > 0 ?
        <div>
          <FilterCountries country={country} setCountry={setCountry} />
          { country && <Countries countries={countries} country={country} setCountry={setCountry} /> }
        </div> : <p>Loading...</p>
      }
    </div>
  );
};

export default App