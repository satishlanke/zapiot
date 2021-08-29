import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import '../styles/CardMain.css'
import { Row, Col } from 'antd';
import img1 from '../assets/mainpage/img1.jpg';
import img2 from '../assets/mainpage/img2.jpg';
import img3 from '../assets/mainpage/img3.jpg';
import img4 from '../assets/mainpage/img4.jpg';


const cardData=[
    {
        src:img1,
        title:'Dedicated Team',
        content:'Build a remote dedicated development team and work with talented Hyderabad developers directly using the tools and methods you know and love.'
    },
    {
        src:img2,
        title:'Quality Assurance',
        content:'Get on-demand help from QA experts to make sure that your product quality complies with the requirements and identify potential bottlenecks.'   
    },
    {
        src:img3,
        title:'UX/UI Design',
        content:'Audit your digital products or design new market-ready solutions to boost brand awareness and revenue with talented UX/UI designers.'   
    },
    {
        src:img4,
        title:'DevOps Engineering',
        content:'Improve cooperation between development and operation teams, scale your product with ease, and ensure robust infrastructure and efficient deployment process.'   
    }
]

export default class CardMain extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div>
                <Row gutter={[16, 16]}>
                    {
                        cardData.map((item,index)=>{
                            return(
                                <Col key={index} style={{padding:'10px'}} span={6}lg={6} md={6} sm={24} xs={24}>
                                <Card  className='card'style={{border:'none'}}>
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
