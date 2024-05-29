// import React from "react";

// const FirebaseProvider = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>This is firebase provider.</h1>
//       {
//         <>
//           <h3>{props.text}</h3>
//           <h3>{props.text2}</h3>
//           <h3>{props.children}</h3>
//         </>
//       }
//     </div>
//   );
// };

// export default FirebaseProvider;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { auth } from "./../../Firebase/Firebase.config";

export const AuthContext = createContext(null); //vvi

const FirebaseProvider = (props) => {
  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => console.log(result.user))
    // .catch((error) => console.log(error.message));
  };

  console.log(props);

  //observer
  useEffect(() => {}, []);

  const authInfo = { createUser };
  return (
    // <div>
    //   {props.children}
    //   {/* <h1>This is firebase provider.</h1> */}
    // </div>
    <AuthContext.Provider value={authInfo}>
      {props.children}
      {/* <h1>This is firebase provider.</h1> */}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;
