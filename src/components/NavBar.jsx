import { useEffect, useState } from 'react';
import { navLinks } from '../constants/index.js'


const NavBar = () => {

    
    {/*handles navbar to not be invisible when scroleld down */ }
    
    const [scrolled, setScrolled] = useState(false);
    {/*
    useGSAP(() => {
        gsap.to(
            '.navbar',
        {
            opacity: 1,
            duration: 2.3,
            ease: 'power2.inOut',
            delay:2,
        } 
    );
    });
    */}
    
    useEffect(() => {
        // Stay transparent over the hero; only go solid once the experience
        // section has reached the bar.
        const handleScroll = () => {
            const experience = document.getElementById('experience')

            if (!experience) {
                setScrolled(window.scrollY > 10)
                return
            }

            setScrolled(experience.getBoundingClientRect().top <= 80)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
        }, [])
    
    return (
      
        <header className={ `navbar ${scrolled ? 'scrolled' :  'not-scrolled'}`}>
          <div className='inner'>
              <a className='logo' href="#hero">
                  Areg Hovumyan
              </a>      
              {/* Centre cluster: nav links plus the GitHub link, kept clear of
                  the Contact button on the far right. */}
              <div className='nav-center'>
                  <nav className='desktop'>
                      <ul>
                          {navLinks.map(({ link, name }) => (
                              <li key={name} className='group'>
                                  <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                      </ul>
                  </nav>
                  <a
                      href='https://github.com/arhovumyan'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='header-link'
                  >
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                      </svg>
                      <span className='header-link-label'>See more on GitHub</span>
                  </a>
                  <a
                      href='/Areg_Hovumyan_Resume.pdf'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='header-link'
                  >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="9" y1="13" x2="15" y2="13" />
                          <line x1="9" y1="17" x2="13" y2="17" />
                      </svg>
                      <span className='header-link-label'>See my resume</span>
                  </a>
              </div>
              <a href='#contact' className='contact-btn group'>
                  <div className='inner'>
                      <span>Contact me</span>
                  </div>
              </a>
          </div>
      
    </header>
  )
}

export default NavBar
