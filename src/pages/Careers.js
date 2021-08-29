import React, { Component } from 'react'
import Topnav from '../components/Topnav'

import '../styles/Careers.css'
import head from '../assets/career/head.PNG'
import {RightOutlined}  from '@ant-design/icons';
import FooterComp from '../components/FooterComp';
import CareerForm from '../components/CareerForm';


const data=[
    {
        para:[
        <li><RightOutlined className='right-arrow-icon'/>Government required benefits (PF, Gratuity etc)</li>,
        <li><RightOutlined className='right-arrow-icon'/>Work from Home after 6 months or regularization whichever comes first</li>,
        <li><RightOutlined className='right-arrow-icon'/>Sponsored Health Policy</li>,
        <li><RightOutlined className='right-arrow-icon'/>Recreational team activity</li>,
        <li><RightOutlined className='right-arrow-icon'/>Twice a year team building/outing</li>,
        <li><RightOutlined className='right-arrow-icon'/>Bonus compensation based on performance</li>,


    ]}
]

export default class Careers extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div>
                    <img src={head} style={{width:'100%'}} alt=''/>
                </div>
                <div style={{backgroundColor:'#F5F5F5'}}>
                    <div className='devops-div-margin p-2'>
                    <h2 className='pe-block1-h2'>Face your future with confidence</h2>
                    <p style={{fontSize:'large'}}>Zapiot is one of the fastest growing companies in the information technology arena. We are seeking the best, brightest and most ambitious talent to join us in our growth journey. If you want to advance your career at one of the fastest-growing IT, business process outsourcing, and consulting companies in the world, you are in the right place.</p>
                     <p style={{fontSize:'large'}}>You have unique experiences, skills and passions—and we believe you can bring them all to us for a rich, rewarding career and lifestyle that will surprise you with its breadth and potential.</p>   
                     <h2 className='career-block-h2-1'>We Offer</h2>
                     <p style={{fontSize:'initial'}}>Aside from a very competitive compensation package, we also provide the following:</p>
                    {
                        data.map((item)=>{
                            return <p className='career-li' style={{listStyle:'none',fontSize:'initial',fontWeight:'450'}}>
                                {
                                    item.para.map((item)=>item)
                                }
                            </p>
                        })
                    }
                     <h2 className='pe-block1-h2'>Interested?</h2>
                     <CareerForm/>

                    </div>
                    

                </div>
                <FooterComp/>
            </div>
        )
    }
}
