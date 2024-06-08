import React from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = (props) => {
  console.log(props);
  const { googleLogin, githubLogin } = useAuth();
  console.log(googleLogin);
  console.log(githubLogin);
  const navigate = useNavigate();
  const location = useLocation();
  const whereFrom = location?.state || "/login";
  const handleSocialLogin = (socialProvider) => {
    socialProvider.then((res) => {
      if (res.user) {
        navigate(whereFrom);
      }
    });
  };
  return (
    <>
      <div className="p-2">
        <h2 className="text-center  divider">Continue With</h2>
        <div className="flex justify-around">
          <button
            onClick={() => {
              handleSocialLogin(googleLogin());
            }}
            className="btn btn-primary"
          >
            Google
          </button>
          <button
            onClick={() => {
              handleSocialLogin(githubLogin());
            }}
            className="btn btn-secondary"
          >
            Github
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
