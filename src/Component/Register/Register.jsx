import React, { useContext } from "react";
import { AuthContext } from "../../Pages/FirebaseProvider/FirebaseProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  //   const all = useContext(AuthContext);
  //   console.log(all);
  // const { createUser } = useContext(AuthContext); //from createContext
  const { createUser, updateProfile } = useAuth();
  console.log(createUser);

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
    const { email, password, image, fullName } = data;
    // console.log(data);
    // console.log(email);
    // console.log(password);
    createUser(email, password).then((res) => {
      updateProfile(fullName, image).then(() => {
        navigate(whereFrom);
        // if (res.user) {
        //   navigate(whereFrom);
        // }
      });
    });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                //required
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="photo url"
                className="input input-bordered"
                //required
                {...register("image")}
              />
            </div>
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
                // required
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <div className="flex p-2 justify-between">
            <p>Have an Account?</p>
            <Link to="/login">
              <button>Please Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
