import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dictionary = () => {
    //create a state variable 'word' with empty strings with a function setWord to update the state.
    const [word, setWord] = useState("")
    const navigate = useNavigate()

    // useEffect(()=> {
    //     console.log('page load', word)
    // },[])
  return (
    <div>
        <input type="text" onChange={(e) =>{
            setWord (e.target.value)
        }}/>
        <button onClick={()=>{
          navigate('/definition/' + word )
        }}>Find</button>

    </div>
  )
}

export default Dictionary
