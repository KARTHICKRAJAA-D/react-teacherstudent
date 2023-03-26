import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "./base";



export function Teachers({users,setUsers}){
    const history=useHistory();

    const deleted=(idx)=>{
       const alteredteach= users.filter((per)=>per.id !==idx);
      setUsers(alteredteach);
    }
   

    return(
        <BaseApp>
        <div className="studentdetails">
        <table  border='1' cellPadding='5px' >
        <thead>
            <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>DEPARTMENT</th>
                    <th>EXPERIENCE</th>
               
                </tr>
                </thead>
        {users.map((per,id)=>(
             <tbody key={id}>
            <tr>
                    <td>{per.id}</td>
                    <td>{per.name}</td>
                    <td>{per.age}</td>
                    <td>{per.department}</td>
                    <td>{per.experience}</td>
                    <button onClick={()=>history.push(`/edits/${per.id}`)}>Edit</button>{' '}
                    <button onClick={()=>deleted(per.id)}>Delete</button>
                    <button onClick={()=>history.push(`/view/${id}`)}>View</button>
               
            </tr>
            </tbody>
        ))}
        </table>
        </div>
        
        </BaseApp>
    )
}