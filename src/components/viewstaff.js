import React from "react";
import { useParams } from "react-router-dom";
import { BaseApp } from "./base";

export function ViewStaff({users}){
    const {id}=useParams();
    const per=users[id]
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
        
             <tbody>
            <tr>
                    <td>{per.id}</td>
                    <td>{per.name}</td>
                    <td>{per.age}</td>
                    <td>{per.department}</td>
                    <td>{per.experience}</td>
                    
               
            </tr>
            </tbody>
       
        </table>
        </div>
        
        
        </BaseApp>
    )
}