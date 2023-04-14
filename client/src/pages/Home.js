import React from "react";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import ForgotPassword from "./ForgotPass"

const Home = () => {
  return (
    <div className="container">
      <Signup />
      <Login />
      <ForgotPassword/>
    </div>
  );
};

export default Home;