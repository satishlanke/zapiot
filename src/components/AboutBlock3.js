import React, { Component } from 'react'
import '../styles/AboutBlock3.css'
import { Row, Col,Divider } from 'antd';
import {RightOutlined}  from '@ant-design/icons';



const blockdata = [
    {
        title:'Our Vision',
        paraData:[`To implement sustainable solutions that improves the picture of various verticals, and unblemished services now and for future generations`],

    },
    {
        title:'Our Mission',
        paraData:[`“We promise to enhance customer’s quality and satisfaction by exploring innovative thoughts, on–time delivery and effectively utilizing best processes and practices”. “At Zapiot, we will act as client’s trusted advisor in IT solutions, products and services to help achieve their business success.”`],

    },
    {
        title:'Our Corevalues',
        paraData:[`Our values serve as a compass for our actions and describe how we behave in the world. Every day, we are guided by our six core values.`,
            <li><RightOutlined className='rightarrow-icon'/>Fairness and Trust</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Ownership</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Noteworthy cost savings</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Client Success</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Growth</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Fun</li>

        ]

    },
    {
        title:'Our Success Factor',
        paraData:[<li><span><RightOutlined className='rightarrow-icon'/></span>Expertise in Multiple Technologies across Industry Verticals</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Rapid Development and Service Consistency</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Single Point Customer Contact</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Clear Definition of Responsibilities</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Strong Project Management and Resource Commitments</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Adaptability to the Cutting Edge Technologies</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Consultative Approach</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Proven Methodology</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Robust Communication Channels</li>,
        ]

    },
    {
        title:'Our Key Differentiators from our Competition',
        paraData:[<li><span><RightOutlined className='rightarrow-icon'/></span>Financial Stability – Zero Debt Company</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Strong Track Record</li>,
           <li> <span><RightOutlined className='rightarrow-icon'/></span>Multiple Services – Consulting, Solution Development, Products and Human Capital Solution</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Nimble, Flexible – Large Company Delivery Capability & Small Company flexibility</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Global Resourcing – Onshore & Offshore Teams, Global Talent Pool</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Quality–ISO 9001:2008</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>Long-Term Client Relationships</li>,
            <li><span><RightOutlined className='rightarrow-icon'/></span>COE-Proven experience of running large scale programs</li>
            

        ],

    },
    
]
export default class AboutBlock3 extends Component {
    render() {
        return (
            <div style={{height:'100%',padding:'5em'}}>
                {
                    blockdata.map((item,index)=>(
                        <Row style={{marginBottom:'3em'}}>
                            <Col xs={24} lg={12} md={12} sm={24}xl={12}>
                            <h2 className='aboutblock3-h2'> {item.title}</h2>
                           
                            </Col>
                            <Col xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                            {
                                item.paraData.map((itemi)=>(
                                 
                                    <p>{itemi}</p>
                                  

                                )
                                  
                                )
                                
                            }
                            </Col>
                            <Divider className={`ant-divider-custom-${index} ant-divider-custom ` }/>
                        </Row>
                       
                        
                      
                    )
                    )
                    
                    
                }
                
            </div>
        )
    }
}
