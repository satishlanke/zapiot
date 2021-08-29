// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import img1 from '../assets/mainpage/11.jpg'
import img2 from '../assets/mainpage/12.jpg'
import img3 from '../assets/mainpage/13.jpeg'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const LastCarouseldata=[
    {
        src:img1,
        title:'MARKETING AS A SERVICE',
        content:'We combine the art and science of Digital Marketing to create winning strategies that drive measurable results. Creative and Analytics led digital marketing services at a cost that startups can afford',
        
    },
    {
        src:img2,
        title:`LET’S MAKE IT WORK!`,
        subtitle:'ZAPIOT BUILDS FOR YOU',
        content:`We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses.`,
        
    },
    {
        src:img3,
        title:'EXPERTLY TRAINED, BATTLE-TESTED, ELITE DEVELOPERS READY TO START WORK TODAY.',
        content:'We help businesses solve the problem of local talent shortage. Build a cross-functional team with custom hired software engineers and benefit from our value-added services.',
        

    }
]

export default class LastCarouselMain extends Component {
    render() {
        return (
            <div >
               
                


                <Carousel infinite={true} className='maincarousel-component' autoPlay style={{width: '100%'}}
                
                 autoPlaySpeed={5000}showDots={true} autoPlay={true} responsive={responsive}>
                    {
                        LastCarouseldata.map((item,index)=>{
                            return(
                                <div className='p-5 maincorousel-div-background' style={{backgroundImage: `url(${item.src})`,backgroundRepeat:'no-repeat'}} key={index}>
                                      <div className='maincarouselanimation sequence fadeInBottom maincarousel'>
                                       <h2>{item.title}</h2>
                                       <h2>{item.subtitle}</h2>
                                       <p>{item.content}</p>
                                       <a className='letsspeak-button' href='#contact' >Let's Discuss</a>


                                        </div>    
                                </div>
                                

                            )
                        })
                    }
               
                
                </Carousel>

            </div>
        )
    }
}












