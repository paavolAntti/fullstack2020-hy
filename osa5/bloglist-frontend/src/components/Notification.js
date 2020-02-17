import React from 'react'
import '../styles/Style.css'


const Notification = ({ message, style }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={style}>
            {message}
        </div>
    )
}

export default Notification