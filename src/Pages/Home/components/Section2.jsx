import React from 'react'

function Section2() {
  return (
    <>
      <div data-aos="fade-down" data-aos-duration="1500" className='py-12'>
        <div className='w-[90%] h-full flex md:flex-row flex-col md:justify-between items-center justify-center mx-auto rounded-3xl bg-primary bg-opacity-80 py-12'>
          <section className='md:w-1/2 w-full h-full px-12 flex justify-start items-center  '>
            <section className='flex flex-col'>
              <h1 className='md:text-md text-sm text-white md:text-white font-bold tracking-[4px] uppercase'  >
                HOME SECURITY
              </h1>
              <h1 className='md:text-3xl text-white text-md  font-bold uppercase'>
                Protect your home with a Vivint system
                that stops crime before it starts
              </h1>
            </section>
          </section>

          <section className='md:w-1/2 w-full'>
            <div className='w-full group-hover:text-primary rounded-3xl flex md:justify-end px-8 justify-center py-4'>
            <button className='md:w-80 md:h-20  py-4 w-[60%] text-3xl font-bold bg-primary hover:bg-white hover:ring-primary hover:text-primary hover:ring-opacity-80 bg-opacity-80 duration-300  ring-2 ring-white text-white rounded-[50px]'>
                  Try Now
            </button>
            </div>

          </section>
        </div>
      </div>
    </>
  )
}

export default Section2