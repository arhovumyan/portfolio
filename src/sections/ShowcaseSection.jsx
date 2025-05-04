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
                      <div className='image-wrapper flex flex-col items-center'>
                          <img src='/images/interview.png' alt='Ryde'/>
                      </div>
                      <div className='text-content text-center'>
                          <h2 className='text-white-50 md:text-2xl mb-10'>
                              An interview app built with Next.js, React, Tailwind, Typescript and many more tools</h2>
                          <a href="https://interview-three-phi.vercel.app/"   className="linkingButton">
                              Take a look
                          </a>      
                      </div>
                  </div>
                  {/*Right Side*/}
                  <div className='project-list-wrapper overflow-hidden flex flex-col items-center'>
                      <div className='project' ref={project2Ref}>
                          <div className="image-wrapper bg-[#black]"> 
                          <img src="/images/sub2.png" alt='Subscription system'/>
                          </div>
                          <p className="flex flex-center text-2xl ">
                              Subscription system
                          </p>
                          <h2 className="flex flex-center"> **WORK IN PROGRESS** </h2>
                      </div>
                      <div className='project' ref={project3Ref}>
                          <div className="image-wrapper bg-[#black]"> 
                          <img src="/images/assistant.png" alt='Subscription system'/>
                          </div>
                          <p className="flex flex-center text-2xl">AI chatbot/assistant</p>
                          <h2 className="flex flex-center"> **WORK IN PROGRESS** </h2>
                      </div>
                      
                  </div>
              </div>
           </div>
      </section>
  )
}

export default ShowcaseSection
