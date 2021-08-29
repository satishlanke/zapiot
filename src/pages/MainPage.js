import React, { Component } from 'react'
import CardBlockMain from '../components/CardBlockMain';
import CardMain from '../components/CardMain';
import TechIconGrid from '../components/TechIconGrid';
import Topnav from '../components/Topnav';
import '../styles/MainPage.css'
import { Row, Col} from 'antd';
import benefit from '../assets/mainpage/benefit.png'
import DiamondShape from '../components/DiamondShape';
import CertificateCarousel from '../components/CertificateCarousel';
import TrustZapiotCarousel from '../components/TrustZapiotCarousel';
import LastCarouselMain from '../components/LastCarouselMain';
import FooterComp from '../components/FooterComp';
import MainCarousel from '../components/MainCarousel';


// import CertificateCarousel from '../components/CertificateCarousel';

  

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div style={{width:'100%'}} >
                <MainCarousel/>
                </div>
                
               <br></br>
                <div className='services-block'>
                    <p className='services-heading'>SERVICES</p>
                    <hr></hr>
                    <div style={{marginTop:'4vh'}}>
                        <CardMain/>
                    </div>
                    <div className='services-block2' style={{marginTop:'10vh',marginBottom:'10vh'}}>
                        <h2 className='services-block2-heading'>Available Developers</h2>
                        <a href='#contact' >HIRE NOW</a>

                    </div>
                    <div className='services-block3'>
                        <h2 className='services-block2-heading'>EXPERTISE</h2>
                        <p>Zapiot provides tech specialists in most web, mobile, and desktop technologies, UI/UX designers, QA/QC engineers, security specialists, and business analysts choosing the best from 200K tech talents in India. Give us the details of the skillset or team setup you are looking for, and we will answer how we can help you. We connect pre-vetted and tailor matched experts from our global partner network bench directly to customers. We will help you find either one engineer for your existing team or build an entire cross-functional team of specialists through custom fit engagement models</p>
                    </div>
                    <div className='services-technologies mt-4' style={{marginBottom:'5vh'}} >
                    <h2 className='services-block2-heading mb-2'>TECHNOLOGIES</h2>
                    <TechIconGrid/>


                    </div>
                    <div className='services-block4'>
                    <p className='services-heading'>BENEFITS</p>
                    <hr className='mb-5'></hr>
                    <CardBlockMain/>

                    </div>
                    

                </div>
            <div>
            <Row>
                <Col sm={24} lg={8} md={8} ><img style={{width:'100%'}} src={benefit} alt='benefit-mainpage'/></Col>
                <Col sm={24} lg={16} md={16}  className='d-flex flex-column justify-content-start ' style={{backgroundColor:'#224468'}} flex={3}>
                    <h2 className='mt-2 mx-2' style={{color: '#FFFFFF',fontFamily: '"Ubuntu", Sans-serif',fontSize: '36px',fontWeight:'300',lineHeight:'46px'}}>
                    Interested in our services?
                    </h2>
                    <a className='letsspeak-button' href='#contact' >LET'S SPEAK</a>
                </Col>
            </Row>
            </div>
            <div className='diamond-component' style={{backgroundColor:'#F5F5F5'}}>
            
                  <DiamondShape/>
            </div>
            <CertificateCarousel/>
            
            <TrustZapiotCarousel/>
            <LastCarouselMain/>
            <FooterComp/>
           
            </div>
        )
    }
}
