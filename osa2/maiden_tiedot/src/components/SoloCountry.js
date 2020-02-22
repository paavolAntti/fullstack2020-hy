import React, {useState, useEffect} from 'react'
import axios from 'axios'

const SoloCountry = ({country}) => {
        const [ weather, setWeather] = useState({})
		const api_key = process.env.REACT_APP_API_KEY
		console.log('api_key: ', api_key)
        const hook = () => {
			console.log('using weather effect hook')
            axios
            .get('http://api.weatherstack.com/current', {params: {access_key: api_key , query: country.capital}})
            .then(response => {
              console.log('countries fetched')
              //console.log(response.data.current)
              setWeather(response.data)
            })
          }

        useEffect(hook, [])
        console.log(weather)
        const location = {...weather.location}
        const current = {...weather.current}
        
        const listLanguages = () => country.languages.map(lang =>
            <li key={lang.name}>{lang.name}</li>
        )
        
        return (
            <div>
                <h1>{country.name}</h1>
                <div>
                    <p>capital: {country.capital}</p>
                    <p>population: {country.population}</p>
                </div>
                <h2>Languages</h2>
                <ul>
                    {listLanguages()}
                </ul>
                <div>
                    <img src={country.flag} width='20%' height='20%' alt='flag'/>
                </div>
                <div>
                    <h2>Weather in {location.name}</h2>
                    <p>Temperature: {current.temperature} Celcius</p>
                    <img src={current.weather_icons} width='20%' height='20%' alt='weather_icon'/>
                    <p>Wind: {current.wind_speed} direction: {current.wind_dir}</p>
                </div> 
            </div>
        )
}

export default SoloCountry