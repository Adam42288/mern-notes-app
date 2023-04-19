import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import Auth from '../utils/auth';

const Navbar = () => {
    const style = {
        position: "absolute",
        top: "0"
    }

    const navigate = useNavigate();

    const loggedIn = Auth.loggedIn();
    
    const logout = () => { 
        Auth.logout() 
    
        navigate("/")
    }

    return (
        <header style={style}>
            <div className='container'>
                {loggedIn ? <h2><button onClick={logout}>Logout</button></h2>:
                <h1 style={{fontSize: "9rem"}}>Secret Keeper</h1>
                }
            </div>
        </header>
    )
}

export default Navbar;