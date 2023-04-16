
import React from 'react';
import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/LoginForm";
import { Signup } from "./pages/SignupForm";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Note from './pages/Note';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
              }
            />
            <Route 
            path='/' 
            element={<Home />}
            />
             <Route 
            path='/Note'
            element={<Note />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;