import React, { useState } from 'react';
import Employees from './Employees.js';
import {v4 as uuid} from "uuid";
import {Link,useNavigate} from 'react-router-dom';

function Add() {

    const [name,setName] = useState('');
    const [age, setAge] = useState('');

    let history = useNavigate();

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name, b = age;

        Employees.push({id: uniqueId, Name: a, Age: b });

        history('/');
    }


  return <div>
        <form className='d-grid gap-2' style={{margin:"15rem"}}>
        <input class="form-control" type="text" placeholder="Enter Name" aria-label="default input example" required onChange={(e) => setName(e.target.value)}/>
        <input class="form-control" type="text" placeholder="Enter Age" aria-label="default input example" required onChange={(e) => setAge(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)} type="button" class="btn btn-success">Add</button>

        </form>
    </div>
  
}

export default Add