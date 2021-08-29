import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import l1 from '../assets/mainpage/l1.png';
import l2 from '../assets/mainpage/l2.png';
import l3 from '../assets/mainpage/l3.png';
import l4 from '../assets/mainpage/l4.png';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

const LastCarouseldata=[
    {
        src:l1
    },
    {
        src:l2
    },
    {
        src:l3
    },
    {
        src:l4
    }
]

export default class LastCarouselMain extends Component {
    render() {
        return (
            <div >
                <h2 className='services-block2-heading mt-4'>FEATURED ON</h2>
                <p style={{textAlign:'center'}}>Appreciation is a Force That Keep Us Going</p>
                


                <Carousel className='react-carousel-certificate'   showDots={true} autoPlay={true} responsive={responsive}>
                    {
                        LastCarouseldata.map((item,index)=>{
                            return(
                                <div key={index}><img src = {item.src} alt='kkk'/></div>

                            )
                        })
                    }
               
                
                </Carousel>

            </div>
        )
    }
}
