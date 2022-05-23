import NavLinks from './NavLinks';
import {useState} from 'react';
import {CgMenu, CgClose} from 'react-icons/cg';


const NavigationMobile = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    document.body.classList.toggle('no-scroll')
    if (open === false) {
      setOpen(true)
      
    } else {
      setOpen(false)
    }
  }

  const burgerIcon = <CgMenu 
    className="burger"
    size="35px"
    color="#f15bb5"
    onClick={() => handleOpen()}
  />

  const closeIcon = <CgClose 
    className="burger"
    size="35px"
    color="#f15bb5"
    onClick={() => handleOpen()}
  />

  const closeMobileMenu = () => {
    setOpen(false)
    document.body.classList.remove('no-scroll')
  }

  return ( 
    <div className="mobile-navigation">
      
      {open ? closeIcon : burgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </div>
   )
}
 
export default NavigationMobile