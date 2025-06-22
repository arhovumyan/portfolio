import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from './components/NavBar.jsx'
import LogoSection from './sections/LogoSection.jsx'
import FeatureCard from './sections/FeatureCard.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import TechStack from './sections/TechStack.jsx'
import Testimonials from './sections/Testimonials.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'
import MisteryBlackBox from './components/MisteryBlackBox.jsx'
import ViewGithub from './sections/ViewGithub.jsx'

const App = () => {
  return (
    <>
      <MisteryBlackBox/>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <ViewGithub/>
      <ExperienceSection />
      <LogoSection />
      {/* <FeatureCard /> */}
      <TechStack />
      {/*<Testimonials />*/}
      <Contact />
      <Footer/>
    </>
  )
}

export default App
