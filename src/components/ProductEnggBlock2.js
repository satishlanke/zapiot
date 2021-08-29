import React, { Component } from 'react'
import c1 from '../assets/productengineer/c1.png'
import c2 from '../assets/productengineer/c2.png'
import c3 from '../assets/productengineer/c3.png'
import c4 from '../assets/productengineer/c4.png'
import c5 from '../assets/productengineer/c5.png'
import c6 from '../assets/productengineer/c6.png'
import { Row,Col } from 'antd'

const data1=[
    {
        src:c1,
        title:'Product Consulting',
        content:'We provide end to end consulting and advisory services on software product ideation, launch, GTM strategy and product roadmap.'
    },
    {
        src:c2,
        title:'Product Architecture',
        content:'We build design & architecture of the application in a way that it incorporates evolving business needs.'
    },
    {
        src:c3,
        title:'Product Design & UX',
        content:'ur design studio maps user journey, defines user flow, creates a wireframe and develops user experience design that engages and delights end users.'
    },
    {
        src:c4,
                title:'Product Development',
        content:'Our software product development services ensure iterative development using razor-edge technologies for faster time to market, robustness, and scale.'
    },
    {
        src:c5,
        title:'Product Testing',
        content:'We provide end to end consulting and advisory services on software product ideation, launch, GTM strategy and product roadmap'
    },
    {
        src:c6,
        title:'DevOps',
        content:'Our DevOps team works closely with the development team to automate end to end delivery pipeline.'
    }
]

export default class ProductEnggBlock2 extends Component {
    render() {
        return (
            <div>
                <h2 className='pe-block1-h2'>We cover the entire gamut of product engineering</h2>
                <Row>
                    {
                        data1.map((item)=>(
                            <Col lg={8} md={8} sm={24} xs={24}>
                            <div className='product-card'>
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
