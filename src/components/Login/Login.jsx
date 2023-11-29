import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext';
import './Login.css'

const Login = () => {
    const [show, setShow] = useState(false)
    const {signIn} = useContext(UserContext)
    const [success, setSuccess] = useState('');
    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'
    console.log(location);


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            navigate(from, {replace: true})
            setSuccess('User Login Successfully')
        })
        .catch(error => console.log(error.message))
    }
    const showPassword = () => {
        setShow(!show)
    }
    return (
        <div>

    <form onSubmit={handleLogin} className='form-container'>
           <h1>Login</h1>
        <div className='login-form'>
        <label>Email:</label>
        <input type="email" id="email" placeholder='Enter Your Email' name="email" required/>
        </div>
        <div className='login-form'>
        <label>Password:</label>
        <input type = {show? "text" : "password"} id="password" placeholder='Enter Your password' name="password" required/>
        <div>
        <span onClick={showPassword}>

        {
            show ? "Hide Password" : "Show Password"
        }
        </span>
        <input className='btn-submit' type="submit" value='Login' name="login" id="login"/>
        </div>
        </div>
        <p className='small'><small>New to ema-john? <Link to='/signup'>Create New Account</Link></small></p>
        <p className='success'> {success} </p>
    </form> 
        </div>
    );
};

export default Login;