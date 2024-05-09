import React, { useRef, useEffect } from 'react';
import 'swiper/css/bundle';
import Swiper from 'swiper';

function Products() {
  const swiperRef = useRef(null);
  const carouselClass = "main-slider"; // Define carouselClass if needed

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        slidesPerView: 1, // Set the number of slides per view
        spaceBetween: 50, // Add space between slides if needed
        loop: true,
        autoplay: {
          delay: 5000, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Keep autoplay running when user interacts with the slider
        },

        breakpoints: {
          640: {
            slidesPerView: 2, // 2 slides per view for medium screens (640px and above)
          },
          1024: {
            slidesPerView: 3, // 3 slides per view for large screens (1024px and above)
          },
        },
      });
    }


  }, [carouselClass]);

  const products = [
    {
      name: 'Camera',
      category: 'Security',
      image: 'assets/home/products/1.webp',
    },
    {
      name: 'Smart Camera',
      category: 'Security',
      image: 'assets/home/products/2.webp',
    },
    {
      name: 'Door Locker',
      category: 'HOME SAFETY',
      image: 'assets/home/products/3.webp', // Updated image path
    },
    {
      name: 'Product 4',
      category: 'This is product 4',
      image: 'assets/home/products/1.webp', // Updated image path
    },
    {
      name: 'Product 4',
      category: 'This is product 4',
      image: 'assets/home/products/1.webp', // Updated image path
    },
    {
      name: 'Product 4',
      category: 'This is product 4',
      image: 'assets/home/products/1.webp', // Updated image path
    },
  ];

  return (
    <div className='w-full flex lg:flex-row flex-col justify-center mx-auto py-24'>
      <section className='lg:w-1/3 flex flex-col md:items-start items-center md:text-start text-center md:px-24 lg:py-12'>
        <h1 className='md:text-lg text-sm text-warning md:text-primary font-bold tracking-[4px] uppercase drop-shadow-lg'>
          EVERYTHING WORKS TOGETHER
        </h1>
        <h1 className='md:text-4xl text-2xl md:w-[90%] text-primary text-md font-bold uppercase'>
          Combine products
          for a safer home
        </h1>
      </section>

      <section className='lg:w-2/3 md:w-[80%] mx-auto w-full h-full lg:h-1/3'>
        <div ref={swiperRef} className="swiper-container w-full lg:h-fit h-full py-12 overflow-hidden px-4">
          <div className="swiper-wrapper">
            {products.map((item, index) => (
              <div key={index} className="swiper-slide lg:w-1/2 pt-12 w-full bg-primary bg-opacity-10 hover:bg-opacity-20 lg:min-h-[600px] md:min-h-[500px] min-h-[400px] flex flex-col justify-between items-center p-5 rounded-3xl text-white">
                <img src={item.image} className="w-full h-full lg:min-h-[400px] object-contain" alt={item.name} />
                <section className='w-full h-[20%] flex flex-col justify-center items-center mt-12 '>
                  <p className='text-sm tracking-wider text-bold uppercase'>{item.category}</p>
                  <h1 className='lg:text-3xl text-lg font-bold text-primary uppercase'>{item.name}</h1>
                </section>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
