import React, { Component } from 'react'

import { Row, Col } from 'antd';
import about2 from '../assets/AboutPage/about-2.jpg'

const data =[
    {title:'We are Zapiot. We help you grow your business by building dedicated development teams in India. Our company was founded in Hyderabad in 2014 since than we empowers our customers towards greater efficiency, innovation, compliance, and cost saving.'
    },
    {
        title:'We started out as a software development outsourcing company, but soon switched to B2B based staff augmentation – a model that allows clients to have more control over recruitment, the development process, and team culture while Zapiot takes care of every other issue related to having a cross functional remote team.'
    },
    {
        title:'We quickly realized that the future would belong to remote work. Direct access to new locations and diverse tech partner network expertise enables companies to deliver cutting-edge products while solving the problem of local talent shortages.'
    },
    {
        title:'In 2019, we expanded our offerings with value-added services such as digital transformation, process consulting, quality control, security testing and MaaS. We’ve also furthered our expertise by adding domain-specific specializations including healthcare, education, fintech, travel, telecom, and eCommerce.'
    },
    {
        title:'Today, Zapiot has offices in Hyderabad, Bengaluru, and Mumbai along with 300+ partner offices globally. We focus our main development capacities in India due to the country’s abundance of highly qualified IT professionals and the ease of doing business.'
    }
]

export default class ContentImg extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='mt-4'>
            <Row>
               
                <Col xs={24} xl={17} >
                    {
                        data.map((item)=>{
                            return(
                                <p  style={{fontSize:'initial',fontWeight:'400'}}>{item.title}</p>
                            )
                        })
                    }
                </Col>
                <Col  xs={24} xl={7} >
                    <img style={{width:'100%',marginTop:'3.5em'}} src={about2} alt='img'/>
                </Col>
            </Row>
            
        </div>
        )
    }
}
