import React from 'react'

function Section2() {
  return (
    <>
      <div id='why-berimolo' data-aos="zoom-in" className='relative w-full h-full py-16'>
        <div className='relative w-full h-[600px] bg-primary bg-opacity-20'>
          <img src="assets/home/section4/Group 30.webp" className='z-[-1] w-full h-full absolute md:object-cover object-right-top object-cover  md:object-top top-0 left-0 bottom-0 right-0' alt="" />
          <section className='w-full h-full flex flex-col md:items-start justify-center text-center md:text-start items-center px-12'>
            <section
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500" className='flex flex-col gap-4'>
              <h1 className='md:text-md text-sm text-warning md:text-white font-bold tracking-[4px] uppercase drop-shadow-lg'>
                WHY BERIMBOLO
              </h1>
              <h1 className='md:text-3xl text-2xl text-white text-md font-bold capitalize drop-shadow-lg'>
                We take care of
                everything for you
              </h1>
              <p className='md:w-1/3 w-full text-xl text-white  drop-shadow-lg'>
                You don’t have to worry about a thing. Our Smart Home Pros install your Vivint system, activate it, and show you how to use it. And with 24/7 monitoring and support, help is always just a few seconds away.
              </p>
              <button className='w-52 h-16 text-xl font-bold bg-warning hover:bg-opacity-85 drop-shadow-lg text-primary rounded-[40px] capitalize md:mx-0 mx-auto'>
                How do i start ?
              </button>
            </section>
          </section>
        </div>

      </div>
    </>
  )
}

export default Section2