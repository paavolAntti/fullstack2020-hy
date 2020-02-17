import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowInfo from './components/ShowInfo'
import './App.css';

const App = () => {

  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  const hook = () => {
    console.log('using effect hook')
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log('countries fetched')
      setCountries(response.data)
    })
  }
  
  useEffect(hook, [])
  
  const handleFilterChange = (event) => {
    console.log('value changed to: ', event.target.value)
    setFilter(event.target.value)
  }

  const filteredInfo = (filter === '')
    ? countries
    : countries.filter(info => 
      info.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Country finder</h1>
      <Filter filter ={filter} handler={handleFilterChange} />
      <ShowInfo
        countries={filteredInfo}
        filter={filter}
        showCountry={setFilter} 
        />
    </div>
  )
}



export default App;
