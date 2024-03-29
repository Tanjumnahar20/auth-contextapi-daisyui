/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {
    const {signIn,googleSignIn} = useContext(AuthContext);
    console.log(signIn)

    const handleLogin=(event)=>{
        event.preventDefault();
        const form =event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email,password)

        signIn(email,password)
        .then(result=> {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset()
        })
        .catch(error=>{
          console.log(error)
        })
    } 

     const handleGoogleLogin=()=>{
        googleSignIn()
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser)
        })
     }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col xxl:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
       
          </div>
         
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to='/register'>
            <button className="btn btn-active btn-link">new to Auth master?</button>

            </Link>
          <button onClick={handleGoogleLogin} className='btn btn-circle btn-primary ml-28 px-5  mb-2 flex-1 items-center justify-center'>Google</button>
          </div>
        </div>
        
      </div>
    );
};

export default Login;