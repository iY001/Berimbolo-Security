import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { RiCloseLine, RiMenu2Line } from "react-icons/ri";
import { Aos } from 'aos';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const handleMouseEnter = (linkName) => {
    setIsHovered(true);
    setDropdown(true);
    const hasLinks = links.find((link) => link.name === linkName && link.links);

    if (!hasLinks) {
      setDropdown(false);
      return;
    }
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
    setIsHovered(false);
  };

  const links = [
    {
      name: 'Home',
      link: '/home',
      links: [
        { name: 'Home', link: '/home' },
        { name: 'Why Berimolo', link: 'home#why-berimolo' },
        { name: 'How to buy a system', link: '/home#buy-system' },
      ]
    },
    {
      name: 'Products',
      link: '/products',
      links: [
        { name: 'Cameras', link: '/cameras' },
        { name: 'Door Locks', link: '/door-locks' }
      ]
    },
    {
      name: 'Services',
      link: '/services',
      links: [
        { name: 'Packages', link: '/packages' },
        { name: 'Products', link: '/door-locks' }
      ]
    },
    {
      name: 'Plans & Pricing',
      link: '/#buy-system',
      // links: [{}]
    }
  ];
// how to make the Link component go to section by id when clicked

  return (
    <>
      <nav className={`z-50 fixed top-0 w-full  ${isHovered ? 'bg-[#ffffff]' : 'bg-primary'} lg:h-20 flex lg:flex-row flex-row justify-center lg:justify-between items-center lg:items-start  `}>
        {/* Desktop Navbar */}
        <section onMouseLeave={() => setIsHovered(false)} className={`lg:w-1/3 w-full lg:h-full transition-transform ease-in ${dropdown ? '' : ''} h-screen text-center ${isHovered ? 'bg-[#ffffff] duration-300' : 'bg-primary'} lg:relative lg:flex items-center hidden lg:top-0 md:pt-10 ${showMenu ? ' top-[80px]' : 'top-[-1000px]'}`}>
          <ul  className={`z-[-1] lg:z-auto left-12 lg:absolute flex lg:flex-row flex-col lg:items-start items-center lg:justify-center lg:mt-2 lg:gap-0 gap-12 lg:py-0 py-24 ${showMenu ? 'h-screen lg:h-fit' : 'h-full'} duration-300`}>
            {links.map((link, index) => (
              <li className='group' key={index} onMouseEnter={() => handleMouseEnter(link.name)} >
                <Link
                  to={link.link}
                  onClick={() => setDropdown(!dropdown)}
                  onMouseEnter={() => setDropdown(true)}
                  className={`relative flex items-center lg:mt-0 ${isHovered ? "text-primary" : "text-white"} lg:text-lg text-3xl text-uppercase font-bold tracking-wider hover:text-primary after:bg-primary after:h-1 after:w-0 after:left-0 after:bottom-[-5px] after:rounded-xl after:absolute after:duration-300 group-hover:after:w-full mx-4`}
                >
                  {link.name}
                  {link.links && link.links.length > 0 && (
                    <IoIosArrowDown className={`ml-2 ${dropdown ? 'group-hover:rotate-180' : ''} duration-300`} />
                  )}
                </Link>

                {link.links && link.links.length > 0 && dropdown && (
                  <div  className={`absolute mx-auto hidden w-full lg:z-auto z-[-1] group-hover:block group-hover:lg:translate-y-0 lg:block ${isHovered ? 'lg:translate-y-[-300px]' : ''} lg:translate-y-[-600px] group-hover:h-full  duration-300`}>
                    <ul className={`flex flex-col ${isHovered ? 'bg-[#ffffff] duration-200 z-[-10]' : 'bg-primary z-[-10]'} rounded-b-md drop-shadow-lg w-full lg:text-start text-center gap-4 pl-4 lg:pb-16 mt-6`}>
                      {link.links.map((sublink, subIndex) => (
                        <li key={subIndex}>
                          <a
                            onMouseEnter={() => handleMouseEnter(link.name)} 
                            href={`${sublink.link}`}
                            className='text-primary hover:underline  lg:text-lg text-3xl text-uppercase font-bold text-start hover:text-primary'
                          >
                            {sublink.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}

          </ul>
        </section>
        {/* Desktop Navbar */}

        <section className='lg:w-1/3 w-full lg:h-full h-20 py-4 flex items-center text-center'>
          {/* Logo */}
          <div className='w-1/4 lg:hidden block'>
            <button onClick={() => setShowAside(!showAside)} className='text-3xl relative flex flex-col justify-center cursor-pointer duration-300 gap-2 pl-4'>
              {/* {
                showAside ? <RiCloseLine className='text-white'/> : <RiMenu2Line  className='text-white'/>  
              } */}
              <span className={`top block w-5 h-[2px] duration-300 text-white ${showAside ? "absolute rotate-45" : ""} top-0 left-4 bg-white`}></span>
              <span className={`middle block h-[2px] duration-300 w-5 ${showAside ? "-rotate-45" : ""}  top-0 left-4 bg-white`}></span>
              <span className={`last h-[2px] w-5 ${showAside ? "absolute -rotate-45" : ""} top-0 duration-300  bg-white`}></span>
            </button>

          </div>
          <h1 className={`text-3xl lg:w-full w-1/2 font-bold drop-shadow-lg uppercase group-hover:text-primary ${isHovered ? "text-primary" : "text-white"}`}>Berimbolo Security</h1>
          {/* Logo */}
        </section>

        <div className={`absolute  w-full h-screen bg-white lg:hidden block duration-300  ${showAside ? 'top-20 left-[0px] z-10' : 'top-20 left-[-1200px] z-[-1]'}`}>
          <ul className='flex lg:flex-row flex-col lg:items-start items-start px-12 lg:justify-center lg:gap-0 gap-6 py-6'>
            {links.map((link, index) => (
              <li className='group' key={index}>
                <Link
                  to={link.link}
                  onClick={() => setDropdown(!dropdown)}
                  className='text-3xl flex items-center justify-start text-uppercase font-semibold  hover:text-primary'
                >
                  {link.name}
                  {link.links && link.links.length > 0 && (
                    <IoIosArrowDown className={`ml-2 ${dropdown ? 'group-hover:rotate-180' : ''} duration-300`} />
                  )}
                </Link>
                {
                  link.links && link.links.length > 0 && (
                    <>
                      <ul className={`hidden gap-2 flex-col duration-500 top-0 ${dropdown ? 'group-hover:flex group-active:translate-y-[-30px] opacity-100' : "hidden group-active:translate-y-300 opacity-0"} `}>
                        {
                          link.links.map((sublink, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={sublink.link}
                                onClick={() => setShowAside(false)}
                                className='text-primary underline text-2xl text-uppercase font-normal text-center hover:text-primary'
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </>
                  )
                }
              </li>
            ))}
          </ul>
        </div>


        {/* Desktop  */}
        <section data-aos="zoom-out-left" className='lg:w-1/3 hidden w-full lg:py-4 lg:px-2 px-5 pt-8 lg:relative lg:flex flex-row items-center lg:justify-center lg:gap-12 gap-0'>
          {/* Auth Buttons */}
          <button className='bg-secondary text-lg hover:drop-shadow-lg hover:shadow-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 w-32 h-10 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200 drop-shadow-lg'>
            Sign In
          </button>

          <button className='bg-secondary text-lg hover:drop-shadow-lg hover:shadow-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 w-32 h-10 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200 drop-shadow-lg'>
            Sign Up
          </button>
        </section>
        {/* Desktop  */}

        {/* <section className='lg:hidden md:w-full w-1/2 text-center flex justify-center items-center'>
        <div className='lg:hidden  md:w-full w-1/2 text-center flex justify-center items-center'>
            <IoIosArrowDown onClick={() => {setShowMenu(!showMenu); setIsHovered(!isHovered)}} className={`cursor-pointer text-3xl ${showMenu ? 'rotate-180' : ''} transition-all duration-300 mx-auto text-tertiary`} />
          </div>
        </section> */}
      </nav>
    </>
  );
}

export default Navbar;
