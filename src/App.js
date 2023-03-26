import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AddStudent } from './components/addstu';
import { BaseApp } from './components/base';
import {  datas } from './components/datastu';
import { teacher } from './components/datateach';
import { EditStu } from './components/editstu';
import { Student } from './components/student';
import { Viewstu } from './components/view';
import { Teachers } from './components/teachers';
import { AddStaff } from './components/addstaff';
import { ViewStaff } from './components/viewstaff';
import { EditStaff } from './components/editstaff';

function App() {
  const[user,setUser]=useState(datas);
  const[users,setUsers]=useState(teacher);


  return (
    <Switch>
      <Route exact path='/'>
<BaseApp/>
      </Route>

    <Route path='/students'>
    <Student
    user={user}
    setUser={setUser}/>
    </Route>

<Route path='/newstudent'>
<AddStudent
user={user}
setUser={setUser}/>
</Route>

<Route path='/viewstu/:id'>
 
  <Viewstu
  user={user}/>
  
</Route>

<Route path='/edit/:id'>
<EditStu
user={user}
setUser={setUser}/>
</Route>
    
    <Route path='/teachers'>
<Teachers
users={users}
setUsers={setUsers}
/>
    </Route>

    <Route path='/newstaff'>
<AddStaff
users={users}
setUsers={setUsers}
/>
    </Route>

    <Route path='/view/:id'>
<ViewStaff
users={users}
setUsers={setUsers}
/>
    </Route>

    <Route path='/edits/:id'>
<EditStaff
users={users}
setUsers={setUsers}
/>
    </Route>

    </Switch>
  );
}

export default App;
