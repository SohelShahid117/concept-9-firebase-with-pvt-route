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
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Root;
