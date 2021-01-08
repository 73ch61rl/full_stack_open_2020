import React from 'react'
import WeatherInCapital from './WeatherInCapital'

const Country = ({ country }) => {
    return (
        <div>
            <h2>{country.name}</h2>
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Languages:</strong></p>
            <ul>{country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>
            <img alt="Country's flag" src={country.flag}/>
            <WeatherInCapital country={country} />
        </div>
    )
}

export default Country