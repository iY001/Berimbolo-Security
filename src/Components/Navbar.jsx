import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { Aos } from 'aos';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showAside, setShowAside] = useState(false);
  const navigate = useNavigate();
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
      link: '#',
    },
    {
      name: 'About',
      link: '/home#why-berimolo'
    },
    {
      name: 'Services',
      link: '/home#services',
    },
    {
      name: 'Plans & Pricing',
      link: '/home#plans',
      // links: [{}]
    }
  ];

  useEffect(() => {
    // make if scroll down show menu
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 500) {
        setIsHovered(true);
      }

      if (window.scrollY < 250) {
        setIsHovered(false);
      }
    });
  }, []);
  // how to make the Link component go to section by id when clicked

  return (
    <>
      <nav className={`z-50 fixed top-0 w-full  ${isHovered ? ' md:bg-[#ffffff] bg-primary' : 'bg-primary'} lg:h-20 flex lg:flex-row flex-row justify-center lg:justify-between items-center lg:items-start  `}>
        {/* Desktop Navbar */}
        <section onMouseLeave={() => setIsHovered(false)} className={`lg:w-1/3 md:w-full w-full flex items-center lg:h-full transition-transform ease-in h-screen text-center ${isHovered ? 'bg-[#ffffff] duration-300' : 'bg-primary'} lg:relative lg:flex items-center hidden lg:top-0 `}>
          <ul className={`z-[-1] lg:z-auto flex lg:flex-row flex-col items-center lg:justify-center lg:mt-2 lg:gap-0 gap-12 lg:py-0 py-24 ${showMenu ? 'h-screen lg:h-fit' : 'h-full'} duration-300`}>
            {links.map((link, index) => (
              <li className='group' key={index} onMouseEnter={() => handleMouseEnter(link.name)} >
                <a
                  href={link.link}
                  onClick={() => setDropdown(!dropdown)}
                  onMouseEnter={() => setDropdown(true)}
                  className={`relative flex items-center lg:mt-0 ${isHovered ? "text-primary" : "text-white"} lg:text-lg text-3xl text-uppercase font-bold tracking-wider hover:text-primary after:bg-primary after:h-1 after:w-0 after:left-0 after:bottom-[-5px] after:rounded-xl after:absolute after:duration-300 group-hover:after:w-full mx-4`}
                >
                  {link.name}
                  {link.links && link.links.length > 0 && (
                    <IoIosArrowDown className={`ml-2 ${dropdown ? 'group-hover:rotate-180' : ''} duration-300`} />
                  )}
                </a>


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
          <a href='#' className={`text-3xl lg:w-full w-1/2 font-bold drop-shadow-lg uppercase group-hover:text-primary ${isHovered ? "md:text-primary text-white" : "text-white"}`}>Berimbolo Security</a>
          {/* Logo */}
        </section>

        <div className={`absolute w-full h-screen bg-white lg:hidden block duration-300  ${showAside ? 'top-20 left-[0px] z-10' : 'top-20 left-[-1200px] z-[-1]'}`}>
          <ul className='flex h-full lg:flex-row flex-col lg:items-start items-start px-12 lg:justify-center lg:gap-0 gap-6 py-6'>
            {links.map((link, index) => (
              <li className='group' key={index}>
                <a
                  href={link.link}
                  onClick={() => setShowAside(!showAside)}
                  className='text-3xl flex items-center justify-start text-uppercase font-semibold  hover:text-primary'
                >
                  {link.name}
                  {link.links && link.links.length > 0 && (
                    <IoIosArrowDown className={`ml-2 ${dropdown ? 'group-hover:rotate-180' : ''} duration-300`} />
                  )}
                </a>

              </li>
            ))}
            <section className='w-full h-full flex flex-col gap-4 items-end justify-end py-20'>
              <button onClick={() => {
                localStorage.removeItem("isAuthenticated")
                setShowAside(false)
                navigate("/login")
              }} className='w-full h-12 text-lg text-center bg-secondary text-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200'>
                Sign in
              </button>
              <button onClick={() => {
                localStorage.removeItem("isAuthenticated")
                setShowAside(false)
                navigate("/register")
              }} className='w-full h-12 text-lg text-center bg-secondary text-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200'>
                Sign up
              </button>
            </section>
          </ul>
        </div>


        {/* Desktop  */}
        <section data-aos="zoom-out-left" className='lg:w-1/3 hidden w-full lg:py-4 lg:px-2 px-5 pt-8 lg:relative lg:flex flex-row items-center lg:justify-end lg:gap-12 gap-0'>
          {/* Auth Buttons */}
          <button onClick={() => {
            localStorage.removeItem("isAuthenticated")
            navigate("/login")
          }} className='bg-secondary text-lg hover:drop-shadow-lg hover:shadow-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 w-32 h-10 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200 drop-shadow-lg'>
            Sign In
          </button>

          <button onClick={() => {
            localStorage.removeItem("isAuthenticated")
            navigate("/register")
          }} className='bg-secondary text-lg hover:drop-shadow-lg hover:shadow-primary font-bold ring-2 ring-primary ring-opacity-20 px-4 py-2 w-32 h-10 rounded-[7px] hover:bg-opacity-95 hover:text-primary duration-200 drop-shadow-lg'>
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
