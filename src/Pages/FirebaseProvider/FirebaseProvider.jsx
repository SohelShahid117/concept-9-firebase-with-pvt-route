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
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./../../Firebase/Firebase.config";

export const AuthContext = createContext(null); //vvi

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((result) => console.log(result.user))
    // .catch((error) => console.log(error.message));
  };

  // console.log(props);

  //update user
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  //reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
    // .then(() => {
    //   // Password reset email sent!
    //   // ..
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    // });
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
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        setUser(user);
        setLoading(false);
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
    loading,
    updateProfile,
    resetPassword,
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
