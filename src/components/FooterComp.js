import React, { Component } from 'react'

// import Recaptcha from 'react-recaptcha';

import '../styles/Footer.css';
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {
  
  NavLink
  
} from 'reactstrap';
import { Row, Col } from 'antd';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Formcapicha from './Formcapicha';
import emailjs from 'emailjs-com';
// import { loadReCaptcha } from 'react-recaptcha-google'

// import Recaptcha from 'react-recaptcha';
export default class FooterComp extends Component {
    constructor(props) {
        super(props)
        this.state={
          isContact:true
        }
        this.sendmail = this.sendmail.bind(this);
      
      
        // this.handleSubscribe = this.handleSubscribe.bind(this);
        // this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        // this.verifyCallback = this.verifyCallback.bind(this);
    
        // this.state = {
        //   isVerified: false
        // }

      }
    
      // recaptchaLoaded() {
      //   console.log('capcha successfully loaded');
      // }
    
      // handleSubscribe() {
      //   if (this.state.isVerified) {
      //     alert('You have successfully subscribed!');
      //   } else {
      //     alert('Please verify that you are a human!');
      //   }
      // }
    
      // verifyCallback(response) {
      //   if (response) {
      //     this.setState({
      //       isVerified: true
      //     })
      //   }
      // }
      sendmail(e){
        e.preventDefault();
        emailjs.sendForm('service_gxhe3dj', 'template_7y61eqq', e.target, 'user_fV8cmkM0Y6mcM2TQzekLK')
      .then((result) => {
          console.log(result.text);
          this.setState({isContact:!this.state.isContact})
          setTimeout(()=>window.location.reload(),3000)
          
      }, (error) => {
          console.log(error.text);
      });
      
      // this.setState({isContact:!this.state.isContact})
      
      }
    render() {
        return (
            <div id='contact' style={{height:'100%'} }>
                <Row style={{backgroundColor:'#E8E8E8'}}>
                    <Col sm={24} lg={12} md={12} xl={12}>
                        <div className='footer-block1-col1'>
                        <Link to='/'><img src={logo} className="logoImage" alt="logo" /></Link>
                        <p className='footer-block1-col1-p1'>Our mission is to help your business grow through remote development talent. Reach out with any questions you have and follow us on social media to see the life of Zapiot.</p>
                        <p>Follow Us</p>
                        <div className='link-icons'>
                        <Link to={{ pathname: "https://www.linkedin.com/company/zenoire-software-services-private-limited/" }} target="_blank"><i class="fab fa-linkedin-in"></i></Link>
                        <Link to={{ pathname: "https://www.instagram.com/zenoire.software/" }} target="_blank"><i class="fab fa-instagram"></i></Link>
                        <Link to={{ pathname: "" }} target="_blank"><i class="fab fa-facebook-f"></i></Link>
                        <Link to={{ pathname: "" }} target="_blank"><i class="fab fa-youtube"></i></Link>
                        <Link to={{ pathname: "https://twitter.com/ZenoireS" }} target="_blank"><i class="fab fa-twitter"></i></Link>
                          
                        </div>
                        

                        </div>
                    </Col>
                    <Col className='footer-block1-col2' lg={12} md={12} sm={24}xl={12}>
                       
                    {
                      this.state.isContact ?
                      <Form noValidate={false} onSubmit={this.sendmail} style={{backgroundColor:'#4E407B' ,padding: '2em'}}>
                    <h2 style={{color:'white'}}>Contact Us</h2>
                            <Row className='mb-2' form>
                                <Col md={8}   style={{marginRight:'2em!important'}}>
                                <FormGroup>
                                    <Label  for="exampleEmail">First Name</Label>
                                    <Input className='footer-form-input'  type="text" required name="to_name" id="exampleEmail" />
                                </FormGroup>
                                </Col>
                                <Col md={8}>
                                <FormGroup style={{marginLeft:'10px'}}>
                                    <Label for="examplePassword">Phone Number</Label>
                                    <Input className='footer-form-input' type="text" required name="phn" id="examplePassword"  />
                                </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup className='mb-2' >
                                <Label for="exampleAddress">Email</Label>
                                <Input className='footer-form-input' type="email" required name="to_email" id="" placeholder=""/>
                            </FormGroup>
                            <FormGroup className='mb-2'>
                                <Label for="exampleAddress2">Message</Label>
                                <Input className='footer-form-input' type="textarea" required name="message" id="exampleAddress2" placeholder=""/>
                            </FormGroup>
                            {/* <FormGroup className='mb-2'>
                               <Formcapicha/>
                            </FormGroup> */}
                           
                            <Button type='submit' style={{borderRadius:'0px',color:'white',fontWeight:'500'}} className='btn btn-warning'>SEND AN REQUEST</Button>
                            </Form>
                          :
                          <h3 style={{color:'#224468',fontWeight:'500'}}>Thank you Contacting Us we will come back to you Asap </h3>
                    }
                    </Col>
                    
                </Row>
                <Row style={{backgroundColor: '#EFEFEF'}}>
                <Col className='footer-block2-2' sm={24} lg={9} md={9} xl={9}>
                    <div className='p-5'>
                    <p style={{fontSize:'initial'}}>We are Zapiot. We help you grow your business by building dedicated development teams in India. Our company was founded in Hyderabad in 2014 since than we empowers our customers towards greater efficiency, innovation, compliance, and cost saving.</p>

                    </div>
                </Col>
                <Col className='footer-block2-2' sm={24} lg={5} md={5} xl={5}>
                <div className='p-5 link-item-flex d-flex flex-column'>
                <h2>Quick Links</h2>
               
                <NavLink className='footer-nav-link' href='/about'>About Zapiot</NavLink>
                <NavLink className='footer-nav-link' href='/Industries'>Industries</NavLink>
                <NavLink className='footer-nav-link' href='/'>Blog</NavLink>
                <NavLink className='footer-nav-link' href='/'>Carreer</NavLink>
                <NavLink className='footer-nav-link' href='/'>Contact Us</NavLink>

                
                </div>
                   
                </Col>
                <Col className='footer-block2-2' sm={24} lg={5} md={5} xl={5}>
                <div className='p-5 link-item-flex d-flex flex-column'>
                <h2>Services</h2>
             
                <NavLink className='footer-nav-link' href='/dedicatedteam'>Dedicated Team</NavLink>
                <NavLink className='footer-nav-link' href='/services/quality-assurance'>Quality Assurance</NavLink>
                <NavLink className='footer-nav-link' href='/services/devops'>DevOps Engineer</NavLink>
                <NavLink className='footer-nav-link' href='/services/product-engineering'>Product Engineering</NavLink>


                
                

                </div>
                </Col>
                <Col className='footer-block2-2'  lg={5} md={5} sm={24}xl={5}>
                <div className='p-5 link-item-flex d-flex flex-column'>
                <h2>Get In touch</h2>
                <p><span><i aria-hidden="true" class="fas fa-map-marker-alt"></i></span>
                2nd Floor,Plot No:78-A, Designer Towers, Shilpa Layout, Gachibowli, Phase 2, HITEC City, Hyderabad, Telangana 500032

                </p>
                <p><span><i aria-hidden="true" class="fas fa-mobile-alt"></i></span>+91 80-74673190</p>
                <p><span><i aria-hidden="true" class="fas fa-envelope"></i></span>phani@zapiot.com</p>


                </div>
                </Col>

                </Row>
                
            </div>
        )
    }
}
