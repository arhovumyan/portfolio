import { words } from "../constants/index.js";
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-main-title',
            {
            y: 200,
            opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 2,
                ease: 'power2.inOut',
                delay: 1,
            },
        )
        gsap.to('.hero-sub-title',
            {
                autoAlpha: 1,
                duration: 2,
                ease: 'power2.inOut',
                delay: 2.5,
            }
        )
        gsap.to('.hero-text hr',
            {
                autoAlpha: 1,
                duration: 2,
                ease: 'power2.inOut',
                delay: 3.5,
            }
        )
        gsap.to('.work-button', {
            autoAlpha: 1,
            duration: 2,
            ease: 'power2.inOut',
            delay: 3.8,
        })
        gsap.to('.contact-button', {
            autoAlpha: 1,
            duration: 2,
            ease: 'power2.inOut',
            delay: 3.8,
        })
        gsap.to('.hero-3d-layout', {
            autoAlpha: 1,
            duration: 2,
            ease: 'power2.inOut',
            delay: 2.76,
        })
    })
  return (
      <section id="hero" className="relative overflow-hidden">
          <div className='absolute top-0 left-0 z-10'>
              {/*<img className="centered-gif" src="/images/background_animation.gif" alt="background"/>*/}
          </div>
          <div className="hero-layout">
              {/*left side*/}
              <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                  <div className='flex flex-col gap-7'>
                      <div className='hero-text'>
                          <h1 className="hero-main-title text-[24px] md:text-[60px] font-bold">
                              I do
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
                            </span>
                          </h1>
                          <hr className="opacity-0 mb-4 w-[200] md:w-[440px] ml-33 md:ml-32 md:block hidden"/>
                          <h1 className="hero-sub-title opacity-0 mt-4 pointer-events-none">
                          Engineering smart systems  <br/>
                          for digital growth.
                          </h1>
                      </div>
                      <Button
              text="See My Works"
              className="work-button opacity-0 md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
                  </div>
              </header>
              <figure>
                <div className=" hero-3d-layout opacity-0">
                    <HeroExperience/>
                </div>
              </figure>
          </div>
          {/* <AnimatedCounter/ > */}
    </section>
  )
}

export default Hero
