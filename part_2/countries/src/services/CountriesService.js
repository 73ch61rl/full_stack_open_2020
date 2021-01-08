import axios from 'axios'

const allCountriesUrl = 'https://restcountries.eu/rest/v2/all'

const getAllCountries = async () => {
    const request = axios.get(allCountriesUrl)
    const response = await request;
    return response.data;
}

export default { getAllCountries }