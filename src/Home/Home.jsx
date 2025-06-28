import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Education from '../Components/Education/Education';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';

const Home = () => {
  return (
    <div className='space-y-10'>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;