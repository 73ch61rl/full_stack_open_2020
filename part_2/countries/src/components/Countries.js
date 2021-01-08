import React from 'react'
import Country from './Country'

const Countries = ({ countries, country, setCountry }) => {
    const filttered = countries.filter(c => c.name.toUpperCase().includes(country.toUpperCase()))
    return (
        <div>
            {
                filttered.length > 10 ? <p className="warning">Too many matches, specify another filter!</p> : filttered.length === 1 ? <Country country={filttered[0]} /> :
                    <ul className="countriesList">
                        {filttered.map(country => (<li key={country.name}>{country.name} <button onClick={() => setCountry(country.name)}>Show country</button></li>))}
                    </ul>
            }
        </div>)
}

export default Countries