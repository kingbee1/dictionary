import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Employee = () => {
  const [worker, setWorker] = useState([])
  const [search, setSearch] = useState('')


  useEffect(()=>{
    getEmployee()
  }, [])

  const getEmployee = async () => {
    const api = await fetch ('https://jsonplaceholder.typicode.com/photos')
    const data = await api.json()
    setWorker(data)
    console.log({data})
    //console.log(data[0].title)
  }

  const onChangeHandler = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <form>
        <input type="text" value={search} onChange={onChangeHandler} />
        <button type="submit" placeholder="search employee">search</button>
      </form>
     <h1>All employees</h1>
     {worker.map((data, id)=> {

      return (
        <div key={id}>
          <h1>{data.id}</h1>
          <h4></h4>
          <p>{data.url}</p>
        </div>
      )
     })}
     
    </div>
  );
};

export default Employee;
