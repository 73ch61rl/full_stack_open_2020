import React from 'react'

const FilterCountries = ({ country, setCountry }) => {
    return (
        <div>
            <label><strong>Find countries:</strong> </label>
            <input value={ country } onChange={ c => setCountry(c.target.value) } />
        </div>
    )
}

export default FilterCountries