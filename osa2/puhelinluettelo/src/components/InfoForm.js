import React from 'react'

const InfoForm = (props) => {
    return (
      <form onSubmit={props.addName}>
          <div>
            name: <input value={props.newName}
            onChange={props.nameHandler} />
          </div>
          <div>
            number: <input value={props.newNumber}
            onChange={props.numberHandler} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    )
  }

  export default InfoForm