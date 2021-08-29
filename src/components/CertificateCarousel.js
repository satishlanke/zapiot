import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c1 from '../assets/mainpage/c1.png';
import c2 from '../assets/mainpage/c2.png';
import c3 from '../assets/mainpage/c3.png';
import c5 from '../assets/mainpage/c5.png';
import c6 from '../assets/mainpage/c6.png';
import c7 from '../assets/mainpage/c7.png';
import c8 from '../assets/mainpage/c8.png';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const certidata=[
    {
        src:c1
    },
    {
        src:c2
    },
    {
        src:c3
    },
    
    {
        src:c5
    },
    {
        src:c6
    },
    {
        src:c7
    },
    {
        src:c8
    }
]


export default class CertificateCarousel extends Component {

    
    render() {
        return (
            
            <div style={{marginLeft:'5em',marginRight:'5em'}}>
                <p className='services-heading mt-5 mb-5'>CERTIFICATIONS</p>
                <Carousel className='react-carousel-certificate'  autoPlaySpeed={1000} autoPlay={true} responsive={responsive}>
                    {
                        certidata.map((item,index)=>{
                            return(
                                <div style={{marginLeft:'5em!important'}} key={index}><img src = {item.src} alt='kkk'/></div>

                            )
                        })
                    }
               
                
                </Carousel>
            </div>
        )
    }
}
