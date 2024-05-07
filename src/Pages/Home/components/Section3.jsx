import React from 'react'
import { FiPhone } from "react-icons/fi";
import { TbSettings2 } from "react-icons/tb";
import { PiWrenchBold } from "react-icons/pi";
function Section3() {
  const card = [
    {
      icon : <FiPhone className='text-white text-2xl' />,
      title : 'Talk with an expert',
      description : 'With just a few questions, our Smart Home Pros will get to know your home and help you build a system to protect it.'
    },
    {
      icon : <TbSettings2 className='text-white text-2xl' />,
      title : 'Customize',
      description : 'Don’t stress over the price of peace of mind— we have package options for every budget, including 0% financing.'
    },
    {
      icon : <PiWrenchBold className='text-white text-2xl' />,
      title : 'Get started',
      description : 'With just a few questions, our Smart Home Pros will get to know your home and help you build a system to protect it.'
    }
  ]
  return (
    <>
    <div id='buy-system' data-aos="fade-down" className='w-full md:pt-0'>
      <div id='buy-system' className='w-[90%] flex flex-col justify-center items-center mx-auto '>
        <section className='flex flex-col justify-center items-center'>
        <h1 className='md:text-sm text-sm text-primary md:text-primary font-bold tracking-[4px] uppercase'>
          How to buy a system
        </h1>
        <h1 className='md:text-3xl text-2xl text-primary text-md  font-bold capitalize'>
        Getting started is simple
        </h1>
        </section>
        <section className='md:w-[70%] w-full flex md:flex-row flex-col justify-center gap-4 py-16'>
          {
            card.map((item, index) => (
              <div data-aos="flip-down" key={index} className='md:w-1/3 w-full flex flex-col justify-center md:items-start items-center'>
                <div className='w-16 h-16 rounded-full bg-primary bg-opacity-50 flex justify-center items-center'>
                  {item.icon}
                </div>
                <h1 className='text-primary text-2xl font-bold capitalize py-4'>
                  {item.title}
                </h1>
                <p className='text-primary text-xl md:text-start text-center'>
                  {item.description}
                </p>
              </div>
            ))
          }
        </section>
      </div>
    </div>
    </>
  )
}

export default Section3