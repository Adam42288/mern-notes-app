import React, { useState } from "react";
import './App.css';
import { Login } from "./pages/LoginForm";
import { Signup } from "./pages/SignupForm";


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;