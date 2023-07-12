import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Employee = () => {
  const [worker, setWorker] = useState([])
  const [search, setSearch] = useState('')
  const [endPoint, setEndPoint] = useState('')


  useEffect(()=>{
    fetchMe()
  }, [endPoint])

  const fetchMe = async () => {
    const api = await fetch (`https://jsonplaceholder.typicode.com/photos/${search}`)
    console.log({search})
    const data = await api.json()
    console.log({data})
    setWorker(data instanceof Array ? data : [data])
    //console.log({data})
    //console.log(data[0].title)

  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

//to submit form/search obviously.
const submitHandler = e => {
  e.preventDefault()
  setEndPoint(search)
}

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={search} onChange={onChangeHandler} />
        <button type="submit" placeholder="search employee">search</button>
      </form>
     <h1>All employees</h1>
     {worker.map((item, id)=> {

      return (
        <div key={id}>
          <h1>{item.id}</h1>
          <h4></h4>
          <p>{item.url}</p>
        </div>
      )
     })}
     
    </div>
  );
};

export default Employee;
