import React, { Component } from 'react'

import { Row,Col,Divider } from 'antd'

const blockdata =[
    {
        title:'Development & Test Environment Setup',
        content:'Setup automatic deployment, test database and all the necessary software and hardware to support development and test execution. '
    },
    {
        title:'Manual Testing',
        content:'Identify and eliminate bugs at the early stages of development to ensure your software meets specified requirements and is ready for the launch.'
    },
    {
        title:'QA Automation',
        content:'Optimize your testing activities to accelerate the delivery of product features and achieve faster turnaround times.'
    },
    {
        title:'Performance Testing',
        content:'Determine your application’s responsiveness and ensure it handles expected loads with the help of continuous integration, system configuration, and reporting.        '
    },
    {
        title:'Security Testing',
        content:'Test the vulnerability of your product with black-box or white-box penetration testing to identify security gaps and develop an action plan for their elimination.'
    }
    
]
export default class QualityBlock2 extends Component {
    render() {
        return (
            <div className='qa-block2-div-margin'>
                <h2 className='qa-block-h2-2'>Quality Control Services We Offer</h2>
                 {
                blockdata.map((item,index)=>(
                    <Row >
                        <Col style={{padding:'2em'}} xs={24} lg={6} md={6} sm={24}xl={6}>
                        <h2 style={{color:'#212529',fontSize:'21px',fontWeight:'700',lineHeight:'32px'}}> {item.title}</h2>
                        
                       
                        </Col>
                        <Col style={{padding:'2em'}}xs={24} lg={18} md={18} sm={24}xl={18} className='aboutblock3-col2' span={16}>
                             <p style={{fontSize:'initial'}}>{item.content}</p>  
                             <Divider />
                        </Col>
                      
                       
                    
                        
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            </div>
        )
    }
}
