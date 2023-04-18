import React, { useState } from "react";
import { useMutation } from "@apollo/client"
import { ADD_USER } from "../utils/mutations.js"
import { Link, useNavigate } from 'react-router-dom';

//criteria for register
const Signup = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const [addUser, { error }] = useMutation(ADD_USER)
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await addUser({
            variables: {
                email: email,
                password: pass
            }
        })

        if (!data) {
            return alert("Sorry...Can't come in")
        }
        alert("Hey buddy")
        navigate('/Note')
    }

    return (
        <div className="auth-form-container">
            <h2>Signup</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <Link className="link-btn" to="/">Already have an account? Login here.</Link>
    </div>
    )
}

export default Signup;