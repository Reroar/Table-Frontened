import React, { Fragment } from 'react';
import Employees from './Employees.js';
import {Link,useNavigate} from 'react-router-dom'


function Home() {

    let history = useNavigate();

    const handleEdit = (id, name ,age) => {
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }


    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');


    }



  return (
    <Fragment>
        <div style={{margin:"10rem"}}>
        <table class="table  table-striped">
            <thead>
                <tr>
                    <th scope='col'>
                    Student ID                       
                    </th>
                    <th scope='col'>
                        Batch Name
                    </th>
                    <th scope='col'>
                        Student Name
                    </th>
                    <th scope='col'>
                        Phone No.
                    </th>
                    <th scope='col'>
                        E-mail
                    </th>
                    <th scope='col'>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                Employees && Employees.length > 0
                ?Employees.map((item) =>{
                    return(
                        <tr>
                            <td>
                                {item.Roll}
                            </td>
                            <td>
                                {item.Branch}
                            </td>                            
                            <td>
                                {item.Name}
                            </td>
                            <td>
                                {item.Phone}
                            </td>
                            <td>
                                {item.Age}
                            </td>
                            <td>
                            <Link to={`/edit`}>
                            <button onClick={()=> handleEdit(item.id, item.Name, item.Age)} type="button" class="btn btn-primary">EDIT</button>
                            </Link>
                            &nbsp;
                            <button onClick={()=> handleDelete(item.id)} type="button" class="btn btn-danger">DELETE</button>
                            </td>
                        </tr>
                    )
                })
                :"No Data Available"
            }                
            </tbody>
            </table>
            <br>
            </br>
            <Link to="/create">
            <button type="button" class="btn btn-success">Create</button>
            </Link>
        </div>
    </Fragment>
  )
}

export default Home