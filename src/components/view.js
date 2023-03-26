import React from "react";
import { useHistory, useParams } from "react-router-dom";

export function Viewstu({user}){
    const history=useHistory();
    const {id}=useParams();
    const per=user[id];
    return(
        <div>
        <div className="titlebar">
        <div>
    <h3 onClick={()=>history.push('/students')} className="con">Students</h3></div>
    <div> <h3 onClick={()=>history.push('/teachers')} className="con">Teachers</h3></div>
    <div> <h3 onClick={()=>history.push('/newstudent')} className="con">Add Student</h3></div>
    <div><h3 onClick={()=>history.push('/newstaff')}  className="con">Add Staff</h3></div>
</div>

      <div className="view">

        <table  border='1' cellPadding='5px' >
        <thead >
            <tr  >
                
                    <th>Id</th>
                    <th>Name</th>
                    <th>Std</th>
                    <th>section</th>
               
                </tr>
                </thead>
      
             <tbody >
            <tr>
               
                    <td>{per.id}</td>
                    <td>{per.name}</td>
                    <td>{per.std}</td>
                    <td>{per.section}</td>
                   
               
            </tr>
            </tbody>
        
        </table>
        </div>
        </div>
        
    )
}