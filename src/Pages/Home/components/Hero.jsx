import React from 'react'

function Hero() {
  return (
    <>
      <div className='w-full'>
        <div className='md:w-[80%] w-full mx-auto flex md:flex-row flex-col-reverse justify-center md:justify-between  h-[600px] bg-primary bg-opacity-20 lg:rounded-b-[80px] rounded-b-[90px]'>

          <section data-aos="fade-right" className='md:w-1/2 w-full mx-auto md:text-start text-center'>
            <div className='w-full lg:px-20 md:px-6 flex items-center text-start h-full'>
              <section className='flex flex-col md:items-start items-center mx-auto justify-center'>
                <h1 className='md:text-2xl text-xl text-primary md:text-white font-bold tracking-[10px] uppercase'>
                  Berimbolo
                </h1>
                <h1 className='text-6xl ml-3  font-bold uppercase'>
                  Security
                </h1>
                <h1 className='text-xl text-white font-bold uppercase ml-12 w-full md:tracking-[3px]'>
                Always monitoring your day
                </h1>
              </section>
            </div>
          </section>


          <section data-aos="fade-left" className='md:w-1/2 w-full py-4'>
            <div className='md:w-full w-1/2  flex flex-row justify-center items-center h-full mx-auto'>
            <img src="assets/home/hero/Group 135.png" className=' md:mx-auto w-72 mr-8' alt="" />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Hero