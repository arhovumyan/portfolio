import { logoIconsList } from '../constants/index.js'

const LogoIcon = ({ icon }) => {
    return (
        <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgPath} alt={icon.name}
            className="w-12 h-12 md:w-16 md:h-16"
            />
        </div>
    )
}
const MovingIcons = () => {
    return (
    <>
    {logoIconsList.map((icon) => (
        <LogoIcon key={icon.name} icon={icon}/>
    ))}
    </>
)}

const LogoSection = () => {
  return (
    <div aria-hidden="true" className=" md:my-20 my-10 relative">
        <div className='gradient-edge' />    
        <div className='gradient-edge' />

        <div className='marquee h-52'>
            <div className='marquee-box md:gap-1 gap-1'>
                  <MovingIcons />
                  <MovingIcons/>
            </div>
        </div>
    </div>
  )
}

export default LogoSection
