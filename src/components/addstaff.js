import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "./base";

export function AddStaff({users,setUsers}){
const history=useHistory();

    const[name,setName]=useState('');
    const[idx,setIdx]=useState('');
    const[department,setDepartment]=useState('');
    const[age,setAge]=useState('');
    const[experience,setExperience]=useState('');

    const addnew=()=>{
        const newmember={
            id:idx,
            name,
            experience,
            age,
            department,
        }
       setUsers([...users,newmember])
       history.push('/teachers')
    }
    return(
        <BaseApp>
         <div className="add">
         <h2>Add New Staff</h2><br></br>
          
          <input value={name} placeholder="name"
          onChange={(e)=>setName(e.target.value)}></input>
          <input value={age} placeholder="age"
          onChange={(e)=>setAge(e.target.value)}></input>
          <input value={experience} placeholder="experience"
          onChange={(e)=>setExperience(e.target.value)}></input>
          <input  value={idx} placeholder="id"
          onChange={(e)=>setIdx(e.target.value)}></input>
           <input  value={department} placeholder="Department"
          onChange={(e)=>setDepartment(e.target.value)}></input><br></br>
          <button onClick={addnew}>Add</button>
        
          </div>
        
        </BaseApp>
    )
}