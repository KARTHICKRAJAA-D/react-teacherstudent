import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { AddStudent } from "./addstu";
import { BaseApp } from "./base";


export function Student({user,setUser}){
    const history=useHistory();
    const deleted = (idx)=>{
        const altered=
        user.filter((per)=>per.id !==idx)
        setUser(altered);
    
    }
   
    return(
        <BaseApp>
        <div className="studentdetails">
        <table  border='1' cellPadding='5px' >
        <thead>
            <tr>
                
                    <th>ID</th>
                    <th>NAME</th>
                    <th>STANDARD</th>
                    <th>SECTION</th>
               
                </tr>
                </thead>
        {user.map((per,id)=>(
             <tbody key={id}>
            <tr>
               
                    <td>{per.id}</td>
                    <td>{per.name}</td>
                    <td>{per.std}</td>
                    <td>{per.section}</td>
                    <button onClick={()=>history.push(`/edit/${per.id}`)}>Edit</button>{' '}
                    <button onClick={()=>deleted(per.id)}>Delete</button>
                    <button onClick={()=>history.push(`/viewstu/${id}`)}>View</button>
               
            </tr>
            </tbody>
        ))}
        </table>
        </div>
        </BaseApp>
    )
}