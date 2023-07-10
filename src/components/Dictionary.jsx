import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Dictionary = () => {
    //create a state variable 'word' with empty strings with a function setWord to update the state.
    const [word, setWord] = useState("")

    useEffect(()=> {
        console.log('page load', word)
    },[])
  return (
    <div>
        <input type="text" onChange={(e) =>{
            setWord (e.target.value)
        }}/>
        <p>what's the defination of {word}</p>
    </div>
  )
}

export default Dictionary
