import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../utils/mutations.js"

//Login function
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [loginUser, { error }] = useMutation(LOGIN_USER)

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
        
        window.location.assign("/Note")
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
            <a className="link-btn" href="/SignupForm" >Don't have an account? Register here.</a> 
        </div>
    )
}
export default Login;
