import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
function Questions() {
  const question = [
    {
      question: 'What services does Berimbolo Security offer?',
      answer : 'Berimbolo Security offers a comprehensive range of security services tailored to meet the needs of individuals and businesses. Their services include risk analysis and consultation to identify vulnerabilities, installation of state-of-the-art security systems like alarms, access control, and surveillance cameras, ongoing maintenance and support to ensure system functionality, and 24/7 monitoring for immediate response to security threats. They prioritize customer safety and peace of mind through their expertise and commitment to reliable security solutions.'
    },
    {
      question: 'What product packages does Berimbolo Security provide?',
      answer : 'Berimbolo Security offers a range of product packages designed to cater to different security needs. They provide basic packages that include essential security features like alarms and entry sensors, ideal for smaller spaces or basic security requirements. Their advanced packages incorporate additional elements such as surveillance cameras, motion detectors, and smart home integration for enhanced security and convenience. Customized packages are also available, allowing clients to tailor their security systems based on specific needs and preferences, ensuring comprehensive protection for homes and businesses alike.'
    },
    {
      question : "What are the core features of Berimbolo Security's website?",
      answer : "Berimbolo Security's website features modern design, brand awareness, detailed service information, easy contact options, and responsive design for seamless user experience."
    }
  ]
  return (
    <>
    <div data-aria="fade-down" id='questions' className='w-full pb-14'>
    <section className='flex flex-col justify-center items-center'>
        <h1 className='md:text-sm text-sm text-primary md:text-primary font-bold tracking-[4px] uppercase'>
          About
        </h1>
        <h1 className='md:text-3xl text-2xl text-primary text-md  font-bold capitalize'>
        Frequently Asked Questions
        </h1>
        </section>

        <section className='w-[80%] flex flex-col justify-center items-center mx-auto py-8 gap-5'>
          { 
            question.map((item, index) => {
              return (
                <Dropdown
                question = {item.question}
                answer = {item.answer}
                />
              )
            })
          }
        </section>
    </div>
    </>
  )
}

const Dropdown = ({question, answer}) => {
  const [showAnswer , setShowAnswer] = useState(false)
  return (
    <>
    <div className='w-full '>
      <div onClick={() => setShowAnswer(!showAnswer)} className={`w-full flex justify-between items-center py-4 bg-primary text-white ${showAnswer ? 'rounded-t-2xl' : 'rounded-2xl'} px-8 cursor-pointer`}>
        <h1 className='md:text-lg text-md text-white font-bold'>
          {question}
        </h1>
        <span  onClick={() => setShowAnswer(!showAnswer)} className='cursor-pointer group'>
        <IoIosArrowDown className={`text-3xl duration-300 ${showAnswer ? 'rotate-180' : ''}`}/>
        </span>
    
      </div>

          <p  className={` ${showAnswer ? 'block md:text-xl text-sm h-full mb-5 w-full px-8 py-4 text-white bg-primary bg-opacity-75 duration-300 rounded-b-2xl group-target:translate-y-0' : 'h-0  '}`}>
            {showAnswer && answer}
          </p>

    </div>
    </>
  )
}

export default Questions