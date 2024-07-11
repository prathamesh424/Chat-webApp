import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GenderCheckedBox from './GenderCheckedBox'
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {
  const[inputs , setInput] = useState({
      fullName:'',
      username :'',
      password:'',
      conformPassword:'',
      gender:''
  }) ;

    
  const {loading , signup} = useSignUp() ;

  const handleCheckBox = (gender) => {
    setInput({...inputs , gender})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault() ;
        await signup(inputs);
    } ;
 
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
       
    <div className='w-full-p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign 
            <span className='text-blue-500'> ChatApp</span>
          </h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label className='label p-2'>
                  <span className='text-base label-text'>Full Name </span>
              </label>
              <input type='text' placeholder='Enter Full Name' className='w-full input input-bordered h-10' 
              value={inputs.fullName}
              onChange={(e) => setInput({...inputs , fullName : e.target.value})}
              />
            </div>

            <div>
              <label className='label p-2'>
                  <span className='text-base label-text'>Username</span>
              </label>
              <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' 
              value={inputs.username}
              onChange={(e) => setInput({...inputs , username : e.target.value})}
              />
            </div>

            <div>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input 
              type="password" 
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInput({...inputs , password : e.target.value})}

              />
            </div>

            <div>
              <label className='label'>
                <span className='text-base label-text'>Conform Password</span>
              </label>
              <input 
              type="password" 
              placeholder='Conform Password'
              className='w-full input input-bordered h-10'
              value={inputs.conformPassword}
              onChange={(e) => setInput({...inputs , conformPassword : e.target.value})}

              />
            </div>
            

            <GenderCheckedBox onCheckboxChange={handleCheckBox} selectedGender={inputs.gender}/>
            

            <Link to={'/'} className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'> 
              Already have an Account ? 
              </Link>

            <div>
              
              <button className='btn btn-block btn-sm mt-2' disabled={loading}>
                {loading ? <span className='loading loading-spinner'></span>  : "Sign Up"}
              </button>
            </div>
          </form>
    </div>
    </div>
  )
}

export default SignUp
 