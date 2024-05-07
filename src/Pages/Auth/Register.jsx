import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const skipForNow = () => {
    localStorage.setItem('isAuthenticated', true)
    window.location.href = '/home'
  }
  return (
    <>
    <div className='w-full h-screen flex lg:flex-row flex-col-reverse justify-between items-center'>
        <section className='lg:w-1/2 w-full h-full relative bg-secondary flex flex-col justify-center items-center'>
          <h1 className='text-3xl font-bold text-primary uppercase'>
            Register
          </h1>
            <div className='w-fit flex flex-col items-center gap-4 mt-8'>
              <input className='w-80 h-12 rounded-[4px] px-4' placeholder='Enter your name' type="text" name="" id="" />
              <input className='w-80 h-12 rounded-[4px] px-4' placeholder='Enter your email' type="text" name="" id="" />
              <input className='w-80 h-12 rounded-[4px] px-4' placeholder='Enter your password' type="text" name="" id="" />
              <Link to={"/login"} className='text-end w-full capitalize'>Already have an account ?</Link>
              <button className='w-80 h-12 rounded-[4px] px-4 bg-primary hover:bg-opacity-85 text-white'>Register</button>
            </div>
            <button onClick={() => skipForNow()} className='mt-4 cursor-pointer'>
              Skip for now
            </button>
        </section>  

        <section className='lg:w-1/2 w-full lg:bg-[#1e1e1e] bg-red-400 lg:h-full lg:flex h-fit top-10 flex justify-center lg:items-center items-end'>
          <img src="assets/home/hero/Group 135.png" className='lg:block absolute lg:top-[30%] top-10 lg:w-fit w-1/3 lg:mr-0 mr-12' alt="" />
        </section>
    </div>
    </>
  )
}

export default Register