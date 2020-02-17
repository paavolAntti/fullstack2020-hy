import React from 'react'

const Info = ({info, showCountry}) => {
    const setCountry = () => {
        console.log('Filter set')
        showCountry(info.name)
      }
    return (
        <div>
          {info.name}
          <button onClick={setCountry}>show</button>
        </div>
    )
}

export default Info