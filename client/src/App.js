import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/Home';
import Login from './pages/LoginForm';
import Signup from './pages/SignupForm';
import Navbar from './components/Navbar';
import Note from './pages/Note';


function App() {


//TODO: Still need to add forgot password and the Note.js when code is written

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
            path='/' 
            element={<Home />}
            />
             <Route 
            path='/loginForm' 
            element={<Login />}
            />
             <Route 
            path='/SignupForm'
            element={<Signup />} 
            />
             <Route 
            path='/Note'
            element={<Note />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
 export default App;