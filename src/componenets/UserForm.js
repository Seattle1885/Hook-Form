import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
    };

    return(
        <>
        <form className="col-3 mx-auto my-5" onSubmit={ createUser }>
            <div className="form-group" >
                <label>First Name:</label>
                <input type="text" class="form-control" onChange={ (e) => setFirstName(e.target.value) } value={ firstName } />
            </div>
            <div className="form-group">
                <label>Last Name:</label>
                <input type="text" class="form-control" onChange={ (e) => setLastName(e.target.value) } value={ lastName } />
            </div>
            <div className="form-group" >
                <label>Email:</label>
                <input type="text" class="form-control" onChange={ (e) => setEmail(e.target.value) } value={ email } />
            </div>
            <div className="form-group" >
                <label>Password:</label>
                <input type="text" class="form-control" onChange={ (e) => setPassword(e.target.value) } value={ password } />
            </div>
            <div className="form-group" >
                <label>Confirm Password:</label>
                <input type="text" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value)} value={ confirmPassword } />
            </div>
            <input type="submit" value="Create User" ></input>
        </form>

        <h4>Your Form Data</h4>
        <div className="col-3 mx-auto my-5">
            <div className="card-body">
    <p className="card-text" >First Name {firstName}</p>
    <p className="card-text" >Last Name {lastName}</p>
    <p className="card-text" >Email {email}</p>
    <p className="card-text" >Password {password}</p>
    <p className="card-text" >Confirm Password {confirmPassword}</p>
            </div>
        </div>

        </>
    );
};

export default UserForm;
