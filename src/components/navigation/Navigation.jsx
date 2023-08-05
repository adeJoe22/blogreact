import React, {useState} from 'react'
import DesktopNav from './DesktopNav'
import Menu from './Menu';
// import MobileNav from './MobileNav'

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <DesktopNav toggleDrawer={toggleDrawer}/>
      <Menu isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    </div>
  )
}
