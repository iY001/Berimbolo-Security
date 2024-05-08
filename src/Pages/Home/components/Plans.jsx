import React from 'react'
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
function Plans() {
  const plan = [
    {
      name: 'Starter Package',
      desc : "Basic home security",
      price: 'Free',
      features: [
        '24/7 Monitoring',
        'Intrusion detection',
        'Touchscreen control panel',
        'Mobile app',
        'Video security ',
        'Theft deterrent',
        'Voice control',
        'Stored video clips',
        'Smart home automation',
        'Home automation',
      ],
      image : 'assets/home/plans/Starter.png.webp',
      planFeatures : 5
    },
    {
      name: 'Premium Package',
      desc : "Complete home protection",
      price: '$49',
      features: [
        '24/7 Monitoring',
        'Intrusion detection',
        'Touchscreen control panel',
        'Mobile app',
        'Video security',
        'Theft deterrent',
        'Voice control',
        'Stored video clips',
        'Smart home automation',
        'Home automation',
      ],
      image : 'assets/home/plans/Premium.png.webp',
      planFeatures : 7
    },
    {
      name: 'PremiumPlus Package',
      desc : "Security + Automation",
      price: '$99',
      features: [
        '24/7 Monitoring',
        'Intrusion detection',
        'Touchscreen control panel',
        'Mobile app',
        'Video security',
        'Theft deterrent',
        'Voice control',
        'Stored video clips',
        'Smart home automation',
        'Home automation',
      ]
    , image : 'assets/home/plans/PremiumPlus.png.webp',
    planFeatures : 10
    }
  ]
  return (
    <>
    <div id='plans' data-aos="fade-down" className='w-full py-24'>
    <section className='flex flex-col justify-center items-center'>
        <h1 className='md:text-sm text-sm text-primary md:text-primary font-bold tracking-[4px] uppercase'>
          PLANS & PRICING
        </h1>
        <h1 className='md:text-3xl text-2xl text-primary text-md  font-bold capitalize'>
        Getting started is simple
        </h1>
        </section>
        <section className='w-[90%] flex md:flex-row flex-col justify-center items-center mx-auto gap-5 py-6'>
          {
            plan.map((item, index) => (
              <PlanCard key={index}  img={item.image} title={item.name} desc={item.desc} features={item.features} planFeatures={item.planFeatures}/>
            ))
          }
        </section>
      </div>
    </>
  )
}

const PlanCard = ({ img, title, desc, features, planFeatures }) => {
  return (
    <div className="group w-fit flex flex-col rounded-[10px] drop-shadow-xl duration-300">
      <div className="bg-white group-hover:bg-primary duration-300 rounded-[10px] shadow-md">
        <div>
          {/* Package Image */}
          <img src={img} className="rounded-t-[10px] w-full h-full" alt="Package Image" />
        </div>
        <div className="px-6 py-4">
          <h5 className="group-hover:text-white text-xl text-center pt-2 font-bold">{title}</h5>
          <p className="group-hover:text-white text-center pb-2">{desc}</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index} className={index < planFeatures ? 'text-success' : ''}>
                <span className="group-hover:text-white">{feature}</span>
                {index < planFeatures ? (
                  <MdDone className="inline-block ml-1 text-green-600" />
                ) : (
                  <RxCross2 className="inline-block ml-1 text-red-500" />
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className='px-6 flex justify-center pb-6'>
          {/* Link to start quote */}
          <a  className="bg-primary mx-auto hover:bg-opacity-100 bg-opacity-90 cursor-pointer duration-300 group-hover:text-primary group-hover:bg-white text-white font-bold py-2 px-4 rounded">Start your quote</a>
        </div>
      </div>
    </div>
  );
};

export default Plans