import React from "react";
import { Link } from "react-router-dom";

const ButtonRegister = () => {
  return (
    <div className="btncontainer">
      <button className="regbtn">
        <Link to="/register">Parent Register</Link>
        <br></br>
      </button>
      <button className="assistbtn">
        <Link to="assistsignup">Assistant Register</Link>
      </button>
    </div>
  );
};

export default ButtonRegister;