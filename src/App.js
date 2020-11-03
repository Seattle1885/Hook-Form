import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import UserForm from './componenets/UserForm';
import ShowUser from './componenets/ShowUser';

function App() {
  /*const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  you dont need this because of line 14-20 and 22-27
  */  

  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
    hasBeenSubmitted:false
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
      hasBeenSubmitted:true

    })
  }

  const handleUserChange = e => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
    })
  }

  /* UserForm is called a callback function */
  return (
    <>
    <div className="App">
        <UserForm 
          inputs={user}
          handleChange={handleUserChange}
          handleSubmit={handleSubmit}
        
        />
        <ShowUser
          user={user}
        />
    </div>
    </>
  );
}

export default App;
