
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NotFound from './NotFound'

const Definition = () => {
    //no "quotes" for the 
    const [word, setWord] = useState("")
    //i created another state to handle data from api because it keeps saying map is not a function
    //this is because .map() function only works with arrays.
    //https://www.pluralsight.com/guides/typeerror-handling-in-react.js-for-map-function
    //const [container, setContainer] = useState([])
    //and now it works here and not there. be back.
    //console.log({container})
    const [notFound, setNotFound] = useState()
   
   
    //console.log(useParams)
    //destructure to get the data of the useParam.
    let { find } = useParams();
    const navigate = useNavigate ()

    
    // useEffect(()=>{
    //     fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + find)
    //     .then((response) => {
    //         if(response.status === 404) {
    //             setNotFound(true)
    //             // navigate('/404')
    //         }
    //         return response.json()
    //     })
    //     .then((data) => {
    //         setContainer(data [0].meanings)
    //        // console.log(data [0].meanings)  
    //     })
    // }, [])


//refactored the code above.
useEffect(()=> {
    getDefinition()
}, [])
const getDefinition = async () => {
    const api = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + find)
    //The await keyword is used to wait for the response from the API. 
    //The response is assigned to the api variable.
    //The json method is called on the api object to parse the response data as JSON. 
    //The parsed data is assigned to the data variable.
    const data = await api.json()
    if(api.status === 404) {
        setNotFound(true)
    }
    //console.log({data})
    //the setContainer function updates the container state variable with data from
    setWord(data [0].meanings)
}

    if (notFound === true) {
        return (
            <>
            <NotFound />
            <Link to='/dictionary'>Find another?</Link>
            </>
        )
    }


  return (
    <div>
     {word ? 
     <>
     
     <h1>The definition is:</h1>
     {word.map((item, def) => {
        console.log({item})
        return (
            <div key={def}>
                <p>
                    {item.partOfSpeech + ': '} 
                    {item?.definitions[0].definition}
                </p>
            </div>
        )
     })}</>
     : null}
    </div>
  )
}

export default Definition
