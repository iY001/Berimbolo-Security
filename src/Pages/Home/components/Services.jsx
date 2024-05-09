import React from 'react'

function Services() {
  const service = [
    {
      title: 'Leave the installation to us',
      subTitle: "PROFESSIONAL INSTALLATION",
      description: 'With just a few questions, our Smart Home Pros will get to know your home and help you build a system to protect it.',
      image: "assets/home/services/1.webp"
    },
    {
      title: 'Protecting your home 24/7',
      subTitle: "24/7 HOME MONITORING",
      description: 'Once your security system is up and running, Berimolo monitoring is protecting your home day and night, always ready to respond to potential emergencies. Sleep soundly and leave home with confidence, knowing that your home is watched over and protected.',
      image: "assets/home/services/3.webp"
    },
    {
      title: 'Leave the installation to us',
      subTitle: "PROFESSIONAL INSTALLATION",
      description: 'With just a few questions, our Smart Home Pros will get to know your home and help you build a system to protect it.',
      image: "assets/home/services/1.webp"
    }
  ]
  return (
    <>
      <div id='services' data-aos="fade-down" className='w-full '>
        <section className='flex flex-col justify-center items-center'>
          <h1 className='md:text-md text-sm text-primary md:text-primary font-bold tracking-[4px] uppercase'>
            SERVICES
          </h1>
          <h1 className='md:text-4xl text-2xl text-primary text-md  font-bold capitalize'>
            Our Services
          </h1>
        </section>
        <div className='md:w-full px-5 flex flex-col justify-center items-center gap-8 py-8'>
          {
            service.map((item, index) => {
              return (
                <ServiceCard
                  title={item.title}
                  subTitle={item.subTitle}
                  description={item.description}
                  image={item.image}
                  // even = {index % 2 == 0}
                  // odd = {index % 2 == 1}
                  invert={index % 2 == 1}
                />
              )
            })
          }
        </div>
      </div>

    </>
  )
}

const ServiceCard = ({ title, subTitle, description, image, invert = true }) => {
  return (
    <>
      <div data-aos="flip-down" className={`lg:w-[80%] md:w-[90%] w-full mx-auto flex md:flex-row ${invert === true ? 'md:flex-row-reverse' : ''} flex-col-reverse justify-center items-center md:justify-between md:min-h-[300px] min-h-[300px] bg-primary bg-opacity-[0.1]  rounded-[90px]`}>
        <section className='md:w-1/2 w-full py-8 bg-yel'>
          <div className={`w-full md:px-12 flex flex-col justify-center  items-center md:text-start text-center h-full`}>
            <section className='flex flex-col md:items-start items-center mx-auto justify-center'>
              <h1 className='text-md tracking-[4px] font-semibold uppercase'>
                {subTitle}
              </h1>
              <h1 className='md:text-3xl text-2xl text-primary text-md  font-bold capitalize'>
                {title}
              </h1>

              <h1 className='text-xl text-gray-700 font-medium w-[80%] py-4'>
                {description}
              </h1>
            </section>
            <div className='w-full flex md:justify-start justify-center'>
              <button className='bg-primary hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded'>
                <a href='#'>Learn More</a>
              </button>
            </div>
          </div>
        </section>

        <section className='md:w-1/2 w-full lg:h-full md:h-[500px]'>
          <div className={`md:w-full w-full overflow-hidden  flex flex-row justify-center items-center md:h-full h-full mx-auto md:rounded-none rounded-t-[90px] ${invert ? "md:rounded-l-[90px]" : "md:rounded-r-[90px]"}`}>
            <img src={image} className='w-full h-full lg:h-full md:h-full md:mx-auto md:object-cover object-cover' alt="" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Services