import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BaseApp } from "./base";

export function AddStudent({user,setUser}){
    const history=useHistory();

    const[name,setName]=useState('');
    const[std,setStd]=useState('');
    const[section,setSection]=useState('');
    const[idx,setIdx]=useState('');

    const newstudent=()=>{
        const newone={
            id:idx,
            name,
            std,
            section,
        }
        setUser([...user,newone])
        setName('');
        setIdx('');
        setSection('');
        setStd('');
        history.push('/students')
    }
    return(
     <BaseApp>
     <div className="add">
            <h2>Add New Student</h2><br></br>
            <input value={name} placeholder="name"
            onChange={(e)=>setName(e.target.value)}></input>
            <input value={std} placeholder="std"
            onChange={(e)=>setStd(e.target.value)}></input>
            <input value={section} placeholder="section"
            onChange={(e)=>setSection(e.target.value)}></input>
            <input  value={idx} placeholder="id"
            onChange={(e)=>setIdx(e.target.value)}></input><br></br>
            <button onClick={newstudent}>Add</button>
            </div>
        </BaseApp> 
    )
}