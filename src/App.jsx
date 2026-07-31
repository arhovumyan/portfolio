import React, { Suspense, lazy, useEffect } from 'react';
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
// Code-split: TechStack pulls in three.js (one WebGL canvas per icon), so keep
// it out of the initial bundle — it's below the fold anyway.
const TechStack = lazy(() => import('./sections/TechStack.jsx'))
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import MisteryBlackBox from './components/MisteryBlackBox.jsx'
import ViewGithub from './sections/ViewGithub.jsx'
import DomainPage from './pages/DomainPage.jsx'
import { getDomain } from './constants/domains.js'
import { useHashRoute } from './hooks/useHashRoute.js'
// Loading screen disabled: the heavy 3D scenes now load lazily, so the page
// paints immediately instead of being gated behind a 3s animation.
// import LoadingScreen from './components/LoadingScreen.jsx';

const App = () => {
  const route = useHashRoute()
  const domain = getDomain(route)

  // Land at the top whenever we switch between home and a domain page.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  if (domain) {
    return <DomainPage domain={domain} />
  }

  return (
    <>
      <MisteryBlackBox/>
      <NavBar />
      <Hero />
      {/* Project cards now live on the Software / Hardware pages. */}
      {/* <ShowcaseSection /> */}
      {/* GitHub link moved up into the NavBar. */}
      {/* <ViewGithub/> */}
      <ExperienceSection />
      <LogoSection />
      {/* <FeatureCard /> */}
      {/* "My Preferred Tech Stack" section removed.
      <Suspense fallback={null}>
        <TechStack />
      </Suspense>
      */}
      {/*<Testimonials />*/}
      <Contact />
      <Footer/>
    </>
  )
}

export default App
