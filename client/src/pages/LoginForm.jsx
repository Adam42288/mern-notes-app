import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../utils/mutations.js"
import { Link, useNavigate } from 'react-router-dom';


//Login function
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [loginUser, { error }] = useMutation(LOGIN_USER)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await loginUser({
            variables: {
                email: email,
                password: pass
            }
        })    

        if (!data) { 
            return alert("Login credentials incorrect")
        }
        
        navigate('/Note')
    }
//criteria for login
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link className="link-btn" to="/SignupForm">Don't have an account? Register here.</Link> 
        </div>
    )
}
export default Login;
