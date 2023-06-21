import React, { useState, useEffect } from 'react';
import Employees from './Employees.js';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Edit() {


    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [id,setId] = useState("");

    let history = useNavigate();

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;


        history('/');
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
        
    },[])




  return (
    <div>
        <form className='d-grid gap-2' style={{margin:"15rem"}}>
        <input class="form-control"  type="text" placeholder="Enter Name" aria-label="default input example" value={name} required onChange={(e) => setName(e.target.value)}/>
        <input class="form-control" type="text" placeholder="Enter Age" aria-label="default input example" value={age} required onChange={(e) => setAge(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)} type="button" class="btn btn-success">Update</button>

        </form>
    </div>
  )
}

export default Edit