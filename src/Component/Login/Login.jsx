import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Pages/FirebaseProvider/FirebaseProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const { signInUser, googleLogin } = useContext(AuthContext);
  const { signInUser, googleLogin, githubLogin } = useAuth();
  console.log(signInUser);
  console.log(googleLogin);
  console.log(githubLogin);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const whereFrom = location?.state || "/login";

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    signInUser(email, password)
      // .then((result) => console.log(result.user))
      // .catch((error) => console.log(error));
      .then((res) => {
        if (res.user) {
          navigate(whereFrom);
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                //required
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                //required
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="flex p-2 justify-between">
            <p>New here?</p>
            <Link to="/register">
              <button>Create an Account</button>
            </Link>
          </div>
          {/* <SocialLogin value={googleLogin}></SocialLogin> */}
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
