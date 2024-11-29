import React, { useState } from 'react'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import {useEffect } from 'react'
import { Link } from 'react-scroll'
import menu_icon from '../../assets/menu-icon.png'


const NavBar = () => {

  const [mobileMenu , setMobileMenu] = useState(false);
  
  const toggle = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }

  // for dynamically changing the color of the nav bar we will use the use state hook
  const [sticky , setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll' , ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[setSticky]);

  return (
    // here if the sticky is true then it would include it in the classname
    // here this Link tag is first included by the react-scroll installation 
    // and here the offset is used to stop the distance from the place 
    // if set to -somevalue then it will stop some distance ahead 
    // if positive then some distance after 
    // the to should match with the id associated where we want to go ,, out the section should have the unique classname which matches it 
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu? '' : 'hide-mobile-option'}>
            <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' className='btn' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
        </ul>

        {/* now for dealing with the responsive website we need to put on the menu icon so that we can hide all the items of the nav bar */}
        {/* we have to enter the functionality when we click the menu icon all items hides and reclick makes them visible */}
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggle} />
    </nav>
  )
}

export default NavBar