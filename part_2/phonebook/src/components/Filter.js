import React from 'react'

const Filter = ({filter, changeFilter}) => {
    return (
      <p>Filter shown with <input value={filter} onChange={changeFilter}/></p>
    )
  }

export default Filter