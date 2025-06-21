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
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        }, [])
    
    return (
      
        <header className={ `navbar ${scrolled ? 'scrolled' :  'not-scrolled'}`}>
          <div className='inner'>
              <a className='logo' href="#hero">
                  Areg Hovumyan
              </a>      
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
