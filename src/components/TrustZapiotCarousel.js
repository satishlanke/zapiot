import React, { Component } from 'react'
import '../styles/TrustZapiotCarousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Row, Col } from 'antd';
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

const TrustZapiotData=[
    {
        content:'“Zapiot solved our hiring challenge by matching us with a top developer offshore just as strong a developer as you’d find at a tech company in San Francisco.',
        title:'Product Manager',
        subtitle:'Health management Predictive analytics company'
    },
    {
        content:'"We are pleased that Zapiot connected us with a senior developer who was able to onboard quickly and execute our project flawlessly from start to finish.”',
        title:'Sr. VP-Travel',
        subtitle:'NIIT Technologies'
    },
    {
        content:'"Our experience in working with Zapiot was positive and we would continue to contract with them for JDE Developers and support projects for CSA.” ',
        title:'Manager, I.T. Services',
        subtitle:'Cooper Standard Automotive'
    },
    {
        content:'“We have had the opportunity to work with multiple developers from Zapiot and all of them have been professional and managed their work to turn over applications as designed.”	',
        title:'Software Applications Manager',
        subtitle:'Lindt & Sprungli'
    },
    {
        content:'“The process of filling our Cloud Engineer positions took less than a week and they found us superstars. They""ve had the flexibility to meet our specific needs every step of the way and their B2B partner network is diversified.” 	',
        title:'CTO',
        subtitle:'Digital transformations company'
    },
    {
        content:'"With the help of Zapiot, we quickly build a DevOps team to work on a part of our project. I was impressed by both the recommendation speed and the developer quality provided."	',
        title:'Shaun Matt',
        subtitle:''
    },
    {
        content:'"We have tried hiring from traditional platforms before, but the quality of developers at Zapiot partner network is far more superior. Aside from developing features, the developer hired was also able to offer architecture advice."',
        title:'CTO',
        subtitle:'Silicon Valley based Startup'
    },
    {
        content:'“The commitment of our Indian developers is something I am very pleased with. Our problems are their problems too. I’m very happy with my development team.” 	',
        title:'Dallas based VC firm',
        subtitle:''
    },
    {
        content:'"The value that Zapiot developers bring to Capillary is that they are always ready to deliver high-quality QA team, on-time solutions and help us to scale when we need."',
        title:'QA Head',
        subtitle:'Capillary'
    },
    {
        content:'“I don’t see Zapiot as an IT outsourcing vendor. They’re part of the day-to-day aspects of our business, we solve problems together – it’s not a short-term partnership."	',
        title:'VP-Delivery',
        subtitle:'Global Staffing company'
    }
]

export default class TrustZapiotCarousel extends Component {
    render() {
        
        return (
            <div style={{backgroundColor:'#F5F5F5'}}>
                 <h2 className='services-block2-heading mt-5'>Leading Tech Companies and Start-ups Trust Zapiot</h2>
                <Carousel  autoPlay={true} responsive={responsive}>
                    {
                        TrustZapiotData.map((item)=>{
                            return(
                                <div className='trustzapiotitem'>
                                <p>{item.content}</p>
                                <h2>{item.title} </h2>
                                <p>{item.subtitle} </p>
                            </div>
                            )
                            
                        })
                    }
                    
                    </Carousel>;
            </div>
           
                
          
        )
    }
}
