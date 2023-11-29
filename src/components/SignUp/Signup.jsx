import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';

const Signup = () => {
    const {createUser} = useContext(UserContext)
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        setSuccess('')
        console.log(email,password, confirm);
        if(password !== confirm){
            setError("password did'nt match")
            return;
        }
        createUser(email, password)
        .then(result => {
            setSuccess('User has been created successfully')
            form.reset();
            console.log(result.user);
        })
        .catch(error =>{ 
            setError(error.message)
        })
    }
    return (
        <div>
        <form onSubmit={handleSignup} className='form-container'>
           <h1>SignUp</h1>
        <div className='login-form'>
        <label>Email:</label>
        <input type="email" id="email" placeholder='Enter Your Email' name="email" required/>
        </div>
        <div className='login-form'>
        <label>Password:</label>
        <input type="password" id="password" placeholder='Enter Your password' name="password" required/>
        </div>
        <div className='login-form'>
        <label>Confirm Password:</label>
        <input type="password" id="confirm" placeholder='Confirm Your Password' name="confirm" required/>
        <input className='btn-submit' type="submit" value='Signup' name="login" id="login"/>
        </div>
        <p className='small'><small>Already have an account? <Link to='/login'>Please Login</Link></small></p>
        <p className='success'> {success} </p>
        <p className='error'>{error} </p>
        </form>
        </div>
    );
};

export default Signup;