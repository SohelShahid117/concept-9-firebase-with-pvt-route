import React, { useContext } from "react";
import { AuthContext } from "../Pages/FirebaseProvider/FirebaseProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  //   console.log(all);
  return all;
};

export default useAuth;
