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

import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../Firebase/Firebase.config";

export const AuthContext = createContext(null); //vvi

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log(user);

  //create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => console.log(result.user))
    // .catch((error) => console.log(error.message));
  };

  // console.log(props);

  //sign in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //github login
  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //logout
  const logOut = () => {
    setUser(null);
    signOut(auth);
    // .then(() => {
    //   // Sign-out successful.
    // })
    // .catch((error) => {
    //   // An error happened.
    // });
  };

  //observer
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUser(user);
      }
    });
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
  };
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
