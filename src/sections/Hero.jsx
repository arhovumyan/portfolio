import React from 'react'
import { words } from "../constants/index.js";
const Hero = () => {
  return (
      <section id="hero" className="relative overflow-hidden">
          <div className='absolute top-0 left-0 z-10'>
              <img src="/images/bg.png" alt="background"/>
          </div>
          <div className="hero-layout">
              {/*left side*/}
              <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                  <div className='flex flex-col gap-7'>
                      <div className='hero-text'>
                          <h1> We do
                            <span className="slide">
                              <span className="wrapper">
                                  {words.map((word) => (
                                      <span key={word.text} className="flex items-center md:gap-4 gap-4 pb-2">
                                          <img
                                            src={word.imgPath}
                                            alt={word.text}
                                              className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                          
                                          <span>{word.text}</span>
                                          </span>
                                  ))}
                                  
                              </span>
                          </span> </h1>
                          <hr class="mb-4">

                          </hr>
                          <h1 className="mt-4 pointer-events-none"> Lets build your business</h1>
                      </div>
                      
                  </div>
              </header>
          </div>
    </section>
  )
}

export default Hero
