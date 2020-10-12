import React from 'react'

const Person = ({ person }) => {
    return (
        <ol>
            <li>{person.content}</li>
        </ol>
    )
}

export default Person