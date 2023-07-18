import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signUp2 from '../../assets/Login.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';

const SignUp = () => {
  const {createUser,UpdateProfileInfo}=useContext(AuthContext)
  
  const [error ,setError]= useState('')
  const [success,setSuccess]= useState('')
  const navigate = useNavigate()

     useTitle('SignUp')
  const handleSignUp=(event)=>{
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photoURL = form.photo.value;
      console.log(name,email,password, photoURL)
      setError('')
      if(password.length<8){
        setError('Password must be 8 characters or longer')
        return
    }

      createUser(email,password)
      .then(result=>{
        const newUser = result.user
        UpdateProfileInfo(result.user,name,photoURL)
        setSuccess(Swal.fire(
          {
           title: 'Success',
           text: 'Register successfully',
           type: 'success',
           icon:'success',
           confirmButtonText: 'Done'
           
          }
           ))
        navigate('/')
        console.log(newUser)
      })
      .catch(error=>{
        console.log(error.message)
        setError(error.message)
      })

     
  }
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 max-w-md mr-20">
           <img className='rounded-xl' src={signUp2} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-md shadow-2xl bg-base-100">
          <h1 className="text-4xl my-5 text-center font-bold">Sign Up now!</h1>

            <div className="card-body">
                <form  onSubmit={handleSignUp}> 
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" />
              </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Your Photo url" name='photo' className="input input-bordered" />
              </div>
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" />
              </div>
              <div>
                <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
              </div>
              <div className="form-control mt-6">
              
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
                </form>

                <label className="label text-center">
                  <p>Already have an account? <span  className="label-text-alt text-lg text-[#FF3811] link link-hover font-bold"><Link to='/login'>Please LogIn</Link></span> </p>
                  
                </label>

            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;