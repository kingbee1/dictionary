import React from 'react'
import '../index.css'

const Test = (props) => {
  return (
    <div className='bg-green-300'>
      <h3 className='bg-blue'>Name: {props.name}</h3>
      <h4>position:{props.role ? props.role : "no role yet"}</h4>
    </div>
  )
}

export default Test
