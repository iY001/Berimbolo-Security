import React from 'react'
import Hero from './components/Hero';
import Section3 from './components/Section3';
import Products from './components/Products';
import Plans from './components/Plans';
import Services from './components/Services';
import Questions from './components/Questions';
import Section2 from './components/Section2';

function HomePage() {
  return (
    <>
    <Hero/>
    <Section2/>
    <Section3/>
    <Products/>
    <Services/>
    <Plans/>
    <Questions/>
    </>
  )
}

export default HomePage