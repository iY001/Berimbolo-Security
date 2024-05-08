import React from 'react';
import 'swiper/css/bundle';
import Carousel from './../../../Components/Carousel';

function Products() {
  const product = [
    {
      name: 'Product 1',
      category: 'This is product 1',
      image: 'assets/home/products/1.webp',
    },
    {
      name: 'Product 2',
      category: 'This is product 2',
      image: 'assets/home/products/2.webp',
    },
    {
      name: 'Product 3',
      category: 'This is product 3',
      image: 'assets/home/products/3.webp',
    },
    {
      name: 'Product 4',
      category: 'This is product 4',
      image: 'assets/home/products/4.webp',
    },
  ];

  return (
    <div className='w-[80%] flex flex-col justify-center items-center mx-auto py-24'>
      <section className='w-full flex flex-col justify-between'>
        <h1 className='md:text-md text-sm text-warning md:text-primary font-bold tracking-[4px] uppercase drop-shadow-lg'>
          EVERYTHING WORKS TOGETHER
        </h1>
        <h1 className='md:text-3xl w-[20%] text-primary text-md font-bold uppercase'>
          Combine products
          for a safer home
        </h1>
      </section>
      <section className='w-full flex justify-center'>
        <Carousel customStyles={" w-full h-full py-12"} carouselClass={"main-slider"}>
          {product.map((item, index) => (
            <div key={index} className={`swiper-slide bg-primary bg-opacity-10 hover:bg-opacity-20 flex justify-center items-center p-5 rounded-3xl text-white w-full`}>
              <img src={item.image} className='w-fit' alt="" />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}

export default Products;