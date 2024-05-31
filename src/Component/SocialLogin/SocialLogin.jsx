import React from "react";
import useAuth from "../../hooks/useAuth";

const SocialLogin = (props) => {
  console.log(props);
  const { googleLogin, githubLogin } = useAuth();
  console.log(googleLogin);
  console.log(githubLogin);
  return (
    <>
      <div className="p-2">
        <h2 className="text-center  divider">Continue With</h2>
        <button
          onClick={() => {
            googleLogin();
          }}
          className="btn btn-primary"
        >
          Google
        </button>
        <button
          onClick={() => {
            githubLogin();
          }}
          className="btn btn-secondary"
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
