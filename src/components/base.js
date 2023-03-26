import React from "react";
import { useHistory } from "react-router-dom";

export function BaseApp({children}){
    const history=useHistory();
    return(
        <div>
            <div className="college">
               SILAMBOLI SILAMBAM SCHOOL
            </div>
<div className="titlebar">
    <div className="title">
    <h3 onClick={()=>history.push('/students')} className="con">Students</h3></div>
    <div> <h3 onClick={()=>history.push('/teachers')} className="con">Teachers</h3></div>
    <div> <h3 onClick={()=>history.push('/newstudent')} className="con">Add Student</h3></div>
    <div><h3 onClick={()=>history.push('/newstaff')}  className="con">Add Staff</h3></div>
</div>
<div className='children'>
{children}
</div>
</div>
    )
}