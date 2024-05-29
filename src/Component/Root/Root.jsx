// import React from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "./../Navbar/Navbar";
// import FirebaseProvider from "./../../Pages/FirebaseProvider/FirebaseProvider";

// const Root = () => {
//   return (
//     <>
//       <Navbar></Navbar>
//       <FirebaseProvider text={"hello"} text2={"hi"}>
//         <button className="btn">Click Me</button>
//       </FirebaseProvider>
//       <Outlet></Outlet>;
//     </>
//   );
// };

import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./../Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>;
    </>
  );
};

export default Root;
