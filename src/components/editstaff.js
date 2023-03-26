import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseApp } from "./base";

export function EditStaff({users,setUsers}){
const history=useHistory();

    const[name,setName]=useState('');
    const[idx,setIdx]=useState('');
    const[department,setDepartment]=useState('');
    const[age,setAge]=useState('');
    const[experience,setExperience]=useState('');

    const{id}=useParams();
    const selectedstaff=users.find((per)=>per.id === id);

useEffect(()=>{
setName(selectedstaff.name);
setIdx(selectedstaff.id);
setAge(selectedstaff.age);
setDepartment(selectedstaff.department);
setExperience(selectedstaff.experience)
},[])

const editedstaff=()=>{
    const edited=users.findIndex(per=>per.id ===id);
    const update={
        id:idx,
        name,
        experience,
        age,
        department,
    }
    users[edited]=update;
    setUsers([...users])
    history.push('/teachers')
}
    return(
        <BaseApp>
        
        <input value={name} placeholder="name"
          onChange={(e)=>setName(e.target.value)}></input>
          <input value={age} placeholder="age"
          onChange={(e)=>setAge(e.target.value)}></input>
          <input value={experience} placeholder="experience"
          onChange={(e)=>setExperience(e.target.value)}></input>
          <input  value={idx} placeholder="id"
          onChange={(e)=>setIdx(e.target.value)}></input>
           <input  value={department} placeholder="Department"
          onChange={(e)=>setDepartment(e.target.value)}></input>
          <button onClick={editedstaff}>Add</button>
        
        
        
        </BaseApp>
    )
}