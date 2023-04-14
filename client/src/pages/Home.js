import React from "react";
import Signup from "./SignupForm";
import Login from "./LoginForm";

const Home = () => {
  return (
    <div className="container">
      <Signup />
      <Login />
    </div>
  );
};

export default Home;