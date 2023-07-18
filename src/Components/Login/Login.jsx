import React, { useContext, useState } from 'react';
import login2 from '../../assets/Login.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';
import { RiGoogleFill } from 'react-icons/ri';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../Firebase/firebase.config';


const Login = () => {
    const [error , setError]= useState('')
    const [success , setSuccess]=useState('')
    const {LogIn}= useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const GoogleProvider = new GoogleAuthProvider();
  
    const auth = getAuth(app);
    useTitle('LogIn')
    const from = location.state?.from?.pathname || '/';
  
      const handleLogin=(event)=>{
          event.preventDefault();
          const form = event.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email,password)
          setError('')
      
  
          LogIn(email,password)
          .then(result=>{
            const user = result.user;
            const loggedUser = {email: user?.email}
            console.log(loggedUser)
            setSuccess(Swal.fire(
              {
               title: 'Success',
               text: 'Log in successfully',
               type: 'success',
               icon:'success',
               confirmButtonText: 'Done'
               
              }
               ))
            

           
          })
          
        }
        const handleGoogle = () => {
          signInWithPopup(auth, GoogleProvider)
            .then(result => {
              const signed = result.user
              console.log(signed)
              setSuccess(Swal.fire(
                {
                 title: 'Success',
                 text: 'Log in successfully',
                 type: 'success',
                 icon:'success',
                 confirmButtonText: 'Done'
                 
                }
                 ))
                 navigate(from,{replace:true})
            })
            .catch(error => {
              console.log(error)
              setError(error.message)
            })
      
        }

  return (
    <div className="hero min-h-screen bg-base-200 my-12">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-20">
          <img src={login2} alt="Login Image" className="w-full h-[480px] rounded" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl my-5 text-center font-bold">Login now!</h1>
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div>
                <p className='text-red-500 '>{error}</p>
                <p className='text-green-500 '>{success}</p>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="LogIn" />
              </div>
            </form>
            <label className="label">
              <p>
                New to kids Reverr Assessment?{' '}
                <span className="label-text-alt text-lg text-[#FF3811] link link-hover font-bold">
                  <Link to="/signup">Please SingUp</Link>
                </span>{' '}
              </p>
            </label>
              <hr className='text-slate-400' />
              <div className='text-center font-bold'> 
              <h3 className='text-xl'>LogIn With Google</h3>
                <button><RiGoogleFill onClick={handleGoogle} className='text-2xl w-full mx-auto mt-4'></RiGoogleFill></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;