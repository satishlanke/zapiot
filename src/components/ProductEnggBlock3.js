import React, { Component } from 'react'
import p1 from '../assets/productengineer/p1.png'
import p2 from '../assets/productengineer/p2.png'
import p3 from '../assets/productengineer/p3.png'
import p4 from '../assets/productengineer/p4.png'
import p5 from '../assets/productengineer/p5.png'

import { Row,Col } from 'antd'

const data1=[
    {
        src:p1,
        title:'Planning',
        content:'Problem definition,Requirement gathering,and Discovery workshop'
    },
    {
        src:p2,
        title:'Development',
        content:'Iterative and incremental development with sprint planning'
    },
    {
        src:p3,
        title:'Deployment',
        content:'Continuous integration & Continuous deployment'
    },
    {
        src:p4,
         title:'Performance',
        content:'QA,Bug fixing and Performance tuning'
    },
    {
        src:p5,
        title:'Evolution',
        content:'Sprint retrospectives & Product improvization'
    }
    
]

export default class ProductEnggBlock3 extends Component {
    render() {
        return (
            <div style={{height:'100%',textAlign:'center'}}>
                <h2 className='pe-block1-h2'>Our Product Engineering Process</h2>
                <p style={{fontSize:'large',fontWeight:'400',marginBottom:'2em'}}>Our Agile product development process comprises of many timeboxed Sprints of two to four weeks ensuring smooth errorfree delivery. We follow a mix of Scrum, XP and Kanban methodologies, which give us the best of both iterative and incremental approaches. Communication, collaboration, and transparency are the backbone of every software development project at TO THE NEW.</p>
                <Row className='pe-ant-row'>
                    {
                        data1.map((item)=>(
                            <Col lg={4} md={4} sm={24} xs={24}>
                            <div style={{height:'100%'}} className='product-card'>
                                <img width='64' height='64' src={item.src} alt=''/>
                                <h2>{item.title}</h2>
                                <p style={{fontSize:'initial'}}>{item.content}</p>
                            </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}
