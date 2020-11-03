import React from 'react';

const ShowUser = props => {
    const {user} = props;

    return(
        <div>
            <p>First Name {user.firstName}</p>
            <p>Last Name {user.lastName}</p>
            <p>Email {user.email}</p>
            <p>Password {user.password}</p>
            <p>Conirm Password{user.confirmPassword}</p>
        </div>
    );    
}

export default ShowUser; 


/*<h4>Your Form Data</h4>
<div className="col-3 mx-auto my-5">
    <div className="card-body">
        <p className="card-text" >First Name {firstName}</p>
        <p className="card-text" >Last Name {lastName}</p>
        <p className="card-text" >Email {email}</p>
        <p className="card-text" >Password {password}</p>
        <p className="card-text" >Confirm Password {confirmPassword}</p>
    </div>
</div>        
);*/