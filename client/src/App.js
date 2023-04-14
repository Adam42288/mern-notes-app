import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/LoginForm';
import Signup from './pages/SignupForm';
import Navbar from './components/Navbar';

//TODO: Still need to add forgot password and the Note.js when code is written
function App() {
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
 export default App;