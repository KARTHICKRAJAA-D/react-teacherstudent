import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BaseApp } from "./base";

export function EditStu({user,setUser}){
    const history=useHistory();
    const[name,setName]=useState('');
    const[std,setStd]=useState('');
    const[section,setSection]=useState('');
    const[idx,setIdx]=useState('');
    
    const{id}=useParams();
    const editstu= user.find((per)=>per.id===id)

 


    useEffect(()=>{
        setIdx(editstu.id);
        setName(editstu.name);
        setSection(editstu.section);
        setStd(editstu.std);

    },[])

    const updatestu = ()=>{
        const updated=user.findIndex(per=>per.id===id);
        const edited={
            id: idx,
            name,
            section,
            std,
        }
        user[updated]=edited;
        setUser([...user])
        history.push('/students')
    }

    return(
        <BaseApp>
        
        <input value={name} placeholder="name"
            onChange={(e)=>setName(e.target.value)}></input>
            <input value={std} placeholder="std"
            onChange={(e)=>setStd(e.target.value)}></input>
            <input value={section} placeholder="section"
            onChange={(e)=>setSection(e.target.value)}></input>
            <input  value={idx} placeholder="id"
            onChange={(e)=>setIdx(e.target.value)}></input>
            <button onClick={updatestu}>Edit</button>
        
        
        
        </BaseApp>
    )
}