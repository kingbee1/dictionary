
import React, { useState } from 'react'
import { useEffect } from 'react'

const Definition = () => {
    //no "quotes" for the 
    const [word, setWord] = useState("")
    //i created another state to handle data from api because it keeps saying map is not a function
    //this is because .map() function only works with arrays.
    //https://www.pluralsight.com/guides/typeerror-handling-in-react.js-for-map-function
    const [container, setContainer] = useState([])
    
    useEffect(()=>{
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/house')
        .then((response) => response.json())
        .then((data) => {
            setContainer(data [0].meanings)
            console.log(data [0].meanings)
        })
    }, [])
  return (
    <div>
      <h1>The definition is:</h1>
     {container.map((christ) => {
        console.log({christ})
     })}
    </div>
  )
}

export default Definition
