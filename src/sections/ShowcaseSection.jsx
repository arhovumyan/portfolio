import { useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)


    
    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100px'
                    }
                }
            )
        })
        gsap.fromTo(sectionRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 3.5,
            })
    },[])

  return (
      <section id="work" ref={sectionRef} className="app-showcase">
          <div className="w-full">
              <div className="showcaselayout">
                  {/*Left Side*/}
                  <div className="first-project-wrapper" ref={project1Ref}>
                      <div className='image-wrapper'>
                          <img src='/images/project1.png' alt='Ryde'/>
                      </div>
                      <div className='text-content'>
                          <h2>
                                Prepare for your future technical interviews
                          </h2>
                          <p className='text-white-50 md:text-xl'>
                              An app built with Next.js, React, Tailwind, Typescript and more tools</p>
                          <a href="https://interview-three-phi.vercel.app/"   className="linkingButton">
                              Take an interview
                          </a>      
                      </div>
                  </div>
                  {/*Right Side*/}
                  <div className='project-list-wrapper overflow-hidden'>
                      <div className='project' ref={project2Ref}>
                          <div className="image-wrapper bg-[#1d1d1d]"> 
                          <img src="/images/project2.png" alt='Subscription system'/>
                          </div>
                          <h2> **WORK IN PROGRESS** </h2>
                      </div>
                      <div className='project' ref={project3Ref}>
                          <div className="image-wrapper bg-[#1d1d1d]"> 
                          <img src="/images/project2.png" alt='Subscription system'/>
                          </div>
                          <h2> **WORK IN PROGRESS** </h2>
                      </div>
                      
                  </div>
              </div>
           </div>
      </section>
  )
}

export default ShowcaseSection
