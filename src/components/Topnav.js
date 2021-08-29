import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
} from 'reactstrap';
import logo from '../assets/logo.png'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import '../styles/Topnav.css'
import {Link} from 'react-router-dom'

const Topnav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menu =(
    <Menu>
    <Menu.Item>
    <Link to='/dedicatedteam'>Dedicated Team</Link>
    </Menu.Item>
    <Menu.Item >
    <Link to='/services/quality-assurance'>Quality Assurance</Link>
    </Menu.Item>
    <Menu.Item >
    <Link to='/services/devops'>DevOps Engineer</Link>
    
    </Menu.Item>
    <Menu.Item >
    <Link to='/services/product-engineering'>Product Engineering</Link>
    </Menu.Item>

  </Menu>
  
  )
  return (
    <div className='topnav-postion'>
      <Navbar  color="white" sticky='top' style={{position:'fixed',width:'100%'}}  light expand="md">
                     <NavbarBrand href="/" className="logoMain">
                        <img src={logo} className="logoImage" alt="logo" />
                    </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className='NavMenu-items' isOpen={isOpen} navbar>
          <Nav   className="mr-auto nav-ul" navbar>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link'  style={{fontWeight:'bold'}} href="/">Home</NavLink>
            </NavItem>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link' style={{fontWeight:'bold'}} href="/about">About</NavLink> 
            </NavItem>
            <NavItem className='topnav-nav-item'>
            <Dropdown overlay={menu}>
            <NavLink className='topnav-nav-link nav-link custom-dropdown'  style={{fontWeight:'bold'}} href="/services">Services <DownOutlined /></NavLink>
               
            </Dropdown>
            </NavItem>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link' style={{fontWeight:'bold'}} href="/platform">Platform</NavLink>
            </NavItem>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link' style={{fontWeight:'bold'}} href="/careers">Careers</NavLink>
            </NavItem>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link' style={{fontWeight:'bold'}} href="/bench">Bench</NavLink>
            </NavItem>
            <NavItem className='topnav-nav-item'>
              <NavLink className='topnav-nav-link contact-us-button'  style={{fontWeight:'bold'}} href="#contact">Contact Us</NavLink>
            </NavItem>
            
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Topnav;