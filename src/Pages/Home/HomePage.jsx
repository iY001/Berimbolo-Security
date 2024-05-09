import React from 'react'
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Products from './components/Products';
import Plans from './components/Plans';
import Services from './components/Services';
import Questions from './components/Questions';

function HomePage() {
  return (
    <>
    <Hero/>
    <Section4/>
    <Section3/>
    {/* <Section2/> */}
    <Products/>
    <Services/>
    <Plans/>
    <Questions/>
    </>
  )
}

export default HomePage