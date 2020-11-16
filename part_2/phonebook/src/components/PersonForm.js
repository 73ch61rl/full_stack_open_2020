import React from 'react'

const PersonForm = (props) => (
    <form onSubmit={props.addPerson}>
        <div>
            Name: <input value={props.newName} onChange={props.changeName} />
        </div>
        <div>
            Number: <input value={props.newNumber} onChange={props.changePhoneNumber} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
)

export default PersonForm