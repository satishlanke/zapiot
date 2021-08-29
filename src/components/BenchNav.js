import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  
  
} from 'reactstrap';
import logo from '../assets/logo.png'
// import { Menu} from 'antd';

import '../styles/Topnav.css'
import {Link} from 'react-router-dom'

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <div className='topnav-postion'>
      <Navbar sticky='top' style={{width:'100%',backgroundColor: '#ebf6f0'}}  light expand="md">
                     <NavbarBrand href="/" className="logoMain">
                        <img src={logo} className="Bench-logoImage" alt="logo" />
                    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className='NavMenu-items' isOpen={isOpen} navbar>
          <Nav   className="mr-auto nav-ul" navbar>
         
           
            
            <Link className='bench-topnav-nav-link' onClick={props.logout} to='/login'>Logout</Link>

            <Link className='bench-topnav-nav-link' to='/register'>Register</Link>
            <Link className='bench-topnav-nav-link' to='/FillJob'>Apply Bench</Link>
              {/* <NavLink  className='contact-us-button' style={{fontWeight:'bold'}} href="#contact">Contact Us</NavLink> */}
           
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topnav;