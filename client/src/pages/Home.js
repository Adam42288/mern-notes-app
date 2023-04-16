import React from "react";
import Signup from "./SignupForm";
import Login from "./LoginForm";
import Note from "./Note";



const Home = () => {
  return (
    <div className="container">
      <Signup />
      <Login />
      <Note />
    </div>
  );
};
export default Home;
