import React, { Component } from 'react'
// import HeadPoster from '../components/HeadPoster'
import Topnav from '../components/Topnav'
import aboutheader from '../assets/AboutPage/aboutheader.PNG'
import { Row, Col } from 'antd';
import ContentImg from '../components/ContentImg';
import ZapiotCountup from '../components/ZapiotCountup';
import AboutBlock3 from '../components/AboutBlock3';
import AboutBlock4 from '../components/AboutBlock4';
import '../styles/AboutPage.css'
import CertificateCarousel from '../components/CertificateCarousel';
import FooterComp from '../components/FooterComp';


export default class AboutPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Topnav/>
                <Row>
                    <Col sm={24} lg={24}md={24} xs={24}>
                    <img style={{width:'100%'}} src={aboutheader} alt='about'/>
                    </Col>
                </Row>
                <div style={{backgroundColor:'#F5F5F5'}} className='p-5 mb-5'>
                <ContentImg/>
                </div>
                <div className='p-4'>
                    <ZapiotCountup/>
                </div>
               <div style={{backgroundColor:'#F5F5F5'}} className='p-5'>
               <AboutBlock3/>
               </div>
               <div className='p-5 about-block4'>
                   <h2>Infrastructure</h2>
                   <AboutBlock4/>

               </div>
               <div className='mb-4'>
               <CertificateCarousel/>

               </div>
               <FooterComp/>
                    
                
                
                

                
            </div>
        )
    }
}
