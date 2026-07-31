import { Suspense, lazy, useCallback, useEffect, useState } from "react";
// Rotating word list ("EMBEDDED", "ROBOTICS", ...) is parked for now — the two
// domain buttons cover the same ground. Un-comment this and the `.slide` block
// below to bring it back.
// import { words } from "../constants/index.js";
import { domains } from "../constants/domains.js";
import Button from '../components/Button.jsx';
import DomainButton from '../components/DomainButton.jsx';
// Heavy three.js scene is code-split so the hero text paints without waiting
// for the 3D bundle/model to download.
const HeroExperience = lazy(() => import('../components/HeroModels/HeroExperience.jsx'));
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive';
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    // Knife is a desktop-only flourish — skipping the render on phones and
    // tablets also keeps the three.js bundle off those devices entirely.
    const showKnife = useMediaQuery({ query: '(min-width: 1024px)' })

    // "move me" hint: shows once the hero has settled, and leaves for good the
    // moment someone grabs the knife.
    const [hintState, setHintState] = useState('waiting')
    const dismissHint = useCallback(() => setHintState('gone'), [])

    useEffect(() => {
        if (!showKnife) return
        const timer = setTimeout(() => {
            setHintState((state) => (state === 'waiting' ? 'shown' : state))
        }, 2200)
        return () => clearTimeout(timer)
    }, [showKnife])

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
        // The knife lands first, the buttons follow half a second later. It
        // settles at low opacity — it's background decor, not the headline.
        gsap.to('.hero-3d-layout', {
            autoAlpha: 0.65,
            duration: 2,
            ease: 'power2.inOut',
            delay: 0.3,
        })
        gsap.fromTo('.domain-switch',
            {
                y: 30,
                autoAlpha: 0,
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 1.4,
                ease: 'power3.out',
                delay: 0.8,
            }
        )
        gsap.to('.hero-scroll', {
            autoAlpha: 1,
            duration: 1.4,
            ease: 'power2.inOut',
            delay: 1.6,
        })
        gsap.to('.contact-button', {
            autoAlpha: 1,
            duration: 2,
            ease: 'power2.inOut',
            delay: 3.8,
        })
        /* Tweens for the retired sub-title, rule, and "See My Works" button —
           restore these alongside the markup below if they come back.
        gsap.to('.hero-sub-title', { autoAlpha: 1, duration: 2, ease: 'power2.inOut', delay: 2.5 })
        gsap.to('.hero-text hr',   { autoAlpha: 1, duration: 2, ease: 'power2.inOut', delay: 3.5 })
        gsap.to('.work-button',    { autoAlpha: 1, duration: 2, ease: 'power2.inOut', delay: 3.8 })
        */
    })
  return (
      <section id="hero" className="relative overflow-hidden">
          <div className='absolute top-0 left-0 z-10'>
              {/*<img className="centered-gif" src="/images/background_animation.gif" alt="background"/>*/}
          </div>
          <div className="hero-layout">
              {/*left side*/}
              <header className='flex flex-col justify-center w-full md:px-20 px-5'>
                  <div className='flex flex-col gap-7'>
                      {/* Two doors into the work: everything I build, split by
                          what it runs on. Each one is its own page. */}
                      <div className="domain-switch invisible">
                          {domains.map((domain) => (
                              <DomainButton key={domain.id} domain={domain} />
                          ))}
                      </div>

                      {/* Nudge to keep going down the page, sitting just under
                          the two buttons. Fades in with the rest. */}
                      <a href="#experience" className="hero-scroll invisible" aria-label="Scroll down">
                          <span className="hero-scroll-mouse">
                              <span className="hero-scroll-dot" />
                          </span>
                          <span className="hero-scroll-label">Scroll</span>
                      </a>

                      <div className='hero-text'>
                          {/* Vertical word slider — kept here on purpose, just disabled.
                          <h1 className="hero-main-title text-[24px] md:text-[60px] font-bold">
                              I study
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
                          <hr className="opacity-0 mb-4 w-[200] md:w-[440px] ml-33 md:ml-55 md:block hidden"/>
                          */}
                          {/* Retired, kept for reference:
                          <h1 className="hero-sub-title opacity-0 mt-4 pointer-events-none">
                          Engineering smart systems  <br/>
                          for digital growth.
                          </h1>
                          */}
                      </div>
                      {/* Retired, kept for reference:
                      <Button
              text="See My Works"
              className="work-button opacity-0 md:w-80 md:h-16 w-60 h-12"
              id="work"
            />
                      */}
                  </div>
              </header>
              {showKnife && (
                <figure>
                  <div className=" hero-3d-layout opacity-0">
                      <Suspense fallback={null}>
                          <HeroExperience onInteract={dismissHint}/>
                      </Suspense>
                  </div>

                  <div
                      className={`hero-knife-hint ${hintState === 'shown' ? 'is-shown' : ''}`}
                      aria-hidden="true"
                  >
                      {/* Sits below-right of the knife, curving up at it. */}
                      <svg className="hero-knife-hint-arrow" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M31 37C31 20 25 10 12 5" />
                          <polyline points="6 15 11 4 22 8" />
                      </svg>
                      <span className="hero-knife-hint-label">move me</span>
                  </div>
                </figure>
              )}
          </div>
          {/* <AnimatedCounter/ > */}
    </section>
  )
}

export default Hero
