import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Employee = () => {
  const [worker, setWorker] = useState([])


  useEffect(()=>{
    getEmployee()
  }, [])

  const getEmployee = async () => {
    const api = await fetch ('https://jsonplaceholder.typicode.com/photos')
    const data = await api.json()
    setWorker(data)
    console.log(data)
  }

  return (
    <div>
     <h1>All employees</h1>
     {worker.map((item, id)=> {

      return (
        <div key={id}>
          <p>{item.title}</p>
        </div>
      )
     })}
     
    </div>
  );
};

export default Employee;
