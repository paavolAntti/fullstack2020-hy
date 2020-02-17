import React from 'react'
import Info from './Info'

const Numbers = ({contacts, setPersons, persons, setNotification, style}) => {

    
    const listInfo = () => contacts.map(info =>
        <Info
            key={info.name}
            info={info}
            setPersons={setPersons}
            persons={persons}
            setNotification={setNotification}
            style={style}
        />
        )
    
    return (
        <div>{listInfo()}</div>
    )
    
    
}

export default Numbers