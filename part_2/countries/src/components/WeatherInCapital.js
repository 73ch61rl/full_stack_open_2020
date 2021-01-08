import axios from 'axios'
import React, { useState, useEffect } from 'react'

const WeatherInCapital = ({ country }) => {
    const capitalWeatherUrl = 'http://api.weatherstack.com/current'
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const params = {
            access_key: process.env.REACT_APP_API_KEY,
            query: country.capital }
        axios.get(capitalWeatherUrl, { params }).then(result => setWeather(result.data.current))
    }, [country])
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            { weather ?
                <div>
                    <p><strong>Temperature:</strong> {weather.temperature} Celcius</p>
                    <img alt='Weather' src={weather.weather_icons[0]}/>
                    <p><strong>Wind:</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
                </div> : <p>Loading...</p>
            }
        </div>
    )
}

export default WeatherInCapital