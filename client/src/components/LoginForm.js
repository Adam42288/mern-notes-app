// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import ForgotPassword from "./ForgotPass";

function Form() { //two state variables for firstName and lastName using `useState`
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

const handleInputChange = (e) => { 
  const { name, value } = e.target;
  return name === 'firstName' ? setFirstName(value) : setLastName(value);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  // Alert the user their first and last name, clear the inputs
  alert(`Hello ${firstName} ${lastName}`);
  setFirstName('');
  setLastName('');
};

return (
  <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        <button type="button" onClick={handleFormSubmit}>
          Sign Up
        </button>
        <button type="clear" onClick={this.goToForgotPassword}>
          Forgot Password?</button>
      </form>
    </div>
  );
}

export default Form;
