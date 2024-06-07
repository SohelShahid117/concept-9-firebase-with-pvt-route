import React from "react";
import useAuth from "../../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  // console.log(user);
  const location = useLocation();
  console.log(location);
  if (!user) {
    // return <h2>Loading...</h2>;
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  return (
    <div>
      <h1>This is private route</h1>
      {children}
    </div>
  );
};

export default PrivateRoute;
