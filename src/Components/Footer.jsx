import React from 'react'
import { FaFacebookSquare , FaLinkedin} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <>
    <div className='w-full border-t-2 drop-shadow-lg py-4 flex flex-col justify-center  items-center bg-primary '>
      <div className='md:w-1/2 w-full flex lg:flex-row flex-col lg:justify-between justify-center md:items-center gap-5'>
    <a href='#' className={`text-3xl lg:w-full font-bold drop-shadow-lg uppercase group-hover:text-primary text-white mx-auto`}>Berimbolo Security</a>
      <section className='flex px-12 md:px-0'>
        <a href='#' className='text-3xl text-white hover:text-primary md:mx-3'>
        <FaFacebookSquare className='text-white' />
        </a>
        <a href='#' className='text-3xl text-white hover:text-primary mx-3'>
        <FaLinkedin className='text-white' />
        </a>
        <a href='https://github.com/iY001/Berimbolo-Security' className='text-3xl text-white hover:text-primary mx-3'>
        <BsGithub className='text-white' />
        </a>
      </section>
      </div>
    <div className='md:w-1/2 w-[80%] h-[2px] bg-white mx-auto my-4 text-center'></div>
    <h1 className='text-white text-md flex justify-center items-center'>
      All Copyrights preserved | Berimbolo Security ©
    </h1>
    </div>
    </>
  )
}

export default Footer