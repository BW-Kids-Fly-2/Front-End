import React from "react";
import { Link } from "react-router-dom";

const ParentProfile = props => {
  return (
    <div>
      Welcome back to KidsFly!
      <Link to="/add-trip">
        <button>Add Trip</button>
      </Link>
    </div>
  );
};

export default ParentProfile;