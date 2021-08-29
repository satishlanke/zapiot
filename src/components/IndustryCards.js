import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import '../styles/CardMain.css'
import { Row, Col } from 'antd';
import img1 from '../assets/industries/img1.jpg';
import img2 from '../assets/industries/img2.jpg';
import img3 from '../assets/industries/img3.jpg';
import img4 from '../assets/industries/img4.jpg';
import img5 from '../assets/industries/img5.jpg';
import img6 from '../assets/industries/img6.jpg';



const cardData=[
    {
        src:img1,
        title:'Healthcare Software Development',
        content:'Zenoire healthcare software development services: we help healthtech companies such as Euretos speed up service delivery and enhance patient outcomes.'
    },
    {
        src:img2,
        title:'E-learning Software Development',
        content:'Zenoire e-learning software development services help online education providers such as StudyTube optimize learning and content distribution.'   
    },
    {
        src:img3,
        title:'Fintech Software Development',
        content:'Zenoire fintech software development services can help you automate service delivery, personalize customer experiences, and leverage innovative tech.'   
    },
    {
        src:img4,
        title:'Travel and Hospitality Software Development',
        content:'Zenoire travel and hospitality software development services: we help companies like Otravo boost customer loyalty and provide memorable experiences.'   
    },
    {
        src:img5,
        title:'Telecom Software Development',
        content:'Zenoire telecom software development services: we help companies like Kwebbl increase efficiency, drive customer engagement, and reduce financial overhead.'   
    },
    {
        src:img6,
        title:'eCommerce Software Development',
        content:'Zenoire eCommerce software development services help companies such as Broadleaf Commerce leverage innovative tech and increase customer engagement.'   
    }
]

export default class IndustryCards extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className='p-2'>
                <Row gutter={[16, 16]}>
                    {
                        cardData.map((item,index)=>{
                            return(
                                <Col key={index} style={{padding:'10px'}} span={8}lg={8} md={8} sm={24} xs={24}>
                                <Card style={{border:'none'}}>
                                    <CardImg top width="100%" src={item.src} alt="Card image cap" />
                                    <CardBody>
                                    <CardTitle tag="h3">{item.title}</CardTitle>
                                    
                                    <CardText>{item.content}</CardText>
                                
                                    </CardBody>
                                </Card>
                                </Col>

                            )
                        })
                    }
                    
                   
                </Row>
                
            </div>
        )
    }
}
