import React from 'react'

const Notification = ({ message }) => {

    if (message === null) {
        return null
    }

    const style = {
        color: message.isError ? 'red' : 'green',
        fontSize: 20,
        background: '#DCDCDC',
        padding: 10,
        marginBottom: 10,
        borderStyle: "solid",
        borderRadius: 5,
    }

    return (
        <div style={style}>
            {message.text}
        </div>
    )
}

export default Notification