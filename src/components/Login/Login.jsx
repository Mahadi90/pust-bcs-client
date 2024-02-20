import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationImg from "../../assets/Animation - 1708353083905.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

   const {emailLogin, googleSignIn} = useContext(AuthContext)
   const navigate = useNavigate()
   const location = useLocation()

   const from =  location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        emailLogin(email, password)
        .then(res => {
            const createdUser = res.user;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace : true})
            console.log(createdUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    
    const handleGoogleSignUp = () => {
        googleSignIn()
        .then(res =>{
            const createdUser = res.user;
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace : true})
              console.log(createdUser)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            className="w-screen h-96 md:h-screen md:w-4/5"
            animationData={animationImg}
            loop={true}
          />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl text-center mt-6 font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Are you new here? please{" "}
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </p>
            <div className="divider">OR</div>
          </form>

          <div className='bg-white pb-4 w-full'>
          <button onClick={handleGoogleSignUp} className="bg-red-500 justify-center w-3/4 mx-auto flex items-center gap-2 text-white py-2 rounded-full"><FaGoogle/>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
