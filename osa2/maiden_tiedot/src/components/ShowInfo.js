import React from 'react'
import Info from './Info'
import SoloCountry from './SoloCountry'

const ShowInfo = ({countries, filter, showCountry, setCurrent, weather}) => {
    const listInfo = () => countries.map(info =>
        <Info key={info.name}
          info={info} showCountry={showCountry} />
    )
    if (filter === ''){
        return <div></div>
    } 
    else if (countries.length > 10) {
        return <div>Too many matches, specify another filter</div> 
    }
    else if(countries.length === 1) {
        return <SoloCountry country={countries[0]}/>
    }
    return <div> {listInfo()}</div> 
}

export default ShowInfo