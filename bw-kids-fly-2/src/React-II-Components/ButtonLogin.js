import React from "react";
import { Link } from "react-router-dom";

const ButtonLogin = () => {
  return (
    <div className="btncontainer">
      <button className="logbtn">
        <Link to="/login">Parent Login</Link>
        <br></br>
        
      </button>
      <button className="assistbtn">
        <Link to="assistlogin">Assistant Login</Link>
      </button>
    </div>
  );
};

export default ButtonLogin;