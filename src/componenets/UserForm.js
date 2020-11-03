import React, { useState } from 'react';

    const UserForm = (props) => {

        const {inputs,handleChange,handleSubmit} = props;

        /*const [firstName, setFirstName] = useState("");
        const [lastName, setLastName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
        const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
        const [firstNameError, setFirstNameError] = useState("");*/
/*
        const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };*/

 /*   const handleName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setFirstNameError = "First Name required"
        } else if (e.target.value.length < 2){
            setFirstNameError = "Field must be at least 2 Characters";
        }

        {
        hasBeenSubmitted ? 
        <h3>Thank you for submitting the form!</h3> :
        <h3>Welcome, please submit the form.</h3> 
        }

    } */

    
    return(
        <>
        <form className="col-3 mx-auto my-5" onSubmit={ handleSubmit }>
            <div className="form-group" >
                <label>First Name:</label>
                <input 
                    type="text" 
                    class="form-control"
                    value={inputs.firstName}
                    name="firstName"
                    onChange={handleChange}
                />
            </div>
            
            <div className="form-group">
                <label>Last Name:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    value={inputs.lastName} 
                    name="lastName"
                    onChange={handleChange}
                />
            </div>
            
            <div className="form-group" >
                <label>Email:</label>
                <input 
                    type="text" 
                    class="form-control"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group" >
                <label>Password:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    name="password"
                    value={inputs.password }
                    onChange={handleChange} 
                />
            </div>
            
            <div className="form-group" >
                <label>Confirm Password:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="confirmPassword"
                    value={inputs.confirmPassword }
                    onChange={handleChange} 
                />
            </div>
            <input type="submit" value="createUser" ></input>
        </form>
        </>
    );
};

export default UserForm;

/*
<h3>{ formMessage() }</h3>
    const formMessage = () => {
        if(hasBeenSubmitted) {
            return "Thank you for submitting your Form!";
        }
        else{
            return "Welcome, Please submit form";
        }
    } 
*/