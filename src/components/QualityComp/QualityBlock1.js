import React, { Component } from 'react'
import { Row,Col,Divider } from 'antd'
import {RightOutlined}  from '@ant-design/icons';
// import InterestedEnviComp from '../InterestedEnviComp';

const blockdata =[
    {
        title:'Better product - higher customer satisfaction. Improve the quality of your product, save costs and shorten your time-to-market with Quality Control services from Zapiot.',
        para:[
            `Due to an innumerable number of projects and their specifications, you might not always need a full-cycle QA service. That’s why Zapiot decided to introduce Quality Control and Testing as a service which allows you to choose your customized testing package and involve a QA engineer only when it is needed. `,
            `Our on-demand QA experts will help you identify potential bottlenecks and ensure your product quality complies with the requirements. `
        ]
    },
    {
        title:`We're Here to Help, In Case You:`,
        para:[ <li><RightOutlined className='right-arrow-icon'/>Need an ongoing professional testing service</li>,
            <li><RightOutlined className='right-arrow-icon'/>Search for temporary Quality Control assistance for your project</li>,
            <li><RightOutlined className='right-arrow-icon'/>Need to increase your software testing capacity during project's peak loads</li>,
            <li><RightOutlined className='right-arrow-icon'/>Want to prepare your software for the launch and ensure its security and reliable performance</li>,
            <li><RightOutlined className='right-arrow-icon'/>Find yourself in need of additional QA resources to set up a software testing lab</li>
        ]
    },
    {
        title:'Our Software Testing Packages',
        para:[`Choose from a variety of manual and automated testing packages customized for different budgets and project requirements.`,
            `Our software testing packages vary from small to double extra large – depending on the amount of testing time needed. We’ll provide you with qualified QA engineers, all you have to do is share your project details, identify the required testing capacity with our experienced consultants, and pay a fixed monthly fee for the chosen package.`,
        `Apart from manual and automated testing packages, we offer security testing as a service`]
    }
]
const blockdata2=[
    {
        title:'Process Analysis',
        content:'We analyze your current development process and evaluate the scope of work you need to suggest the appropriate timing and QA team composition for your project.'
    },
    {
        title:'Service Agreement',
        content:'After making a thorough assessment of your expectations, we negotiate terms and conditions for further cooperation to conclude a service agreement.'
    },
    {
        title:'Discovery Phase',
        content:'Later on, we introduce your project to the team and review its documentation to develop an efficient Testing Strategy, Test Plan, Test Cases, and Scenarios.'
    },
    {
        title:'Service Delivery',
        content:'Finally, we conduct regular testing activities in accordance with the Test Plan to ensure that nothing in your software is overlooked.'
    }
]

const blockdata3 =[
    {
        title:'This system evaluates the performance of every QA expert according to the following criteria:',
        para:[
            <li><RightOutlined className='right-arrow-icon'/>Requirements Coverage</li>,
            <li><RightOutlined className='right-arrow-icon'/>Defect Removal Efficiency</li>,
            <li><RightOutlined className='right-arrow-icon'/>Test Case EffectivenessNeed to increase your software testing capacity during project's peak loads</li>,
            <li><RightOutlined className='right-arrow-icon'/>Automated Test Coverage</li>,
            <li><RightOutlined className='right-arrow-icon'/>Defect Leakage</li>,
            <li><RightOutlined className='right-arrow-icon'/>Passed Test Case Ratio</li>,
            <li><RightOutlined className='right-arrow-icon'/>Number of Missed Weekly Reports</li>,
            <li><RightOutlined className='right-arrow-icon'/>Number of Customer Complaints</li>,


        ]
    },
    {
        title:'With Zapiot, You Will Get:',
        para:[
            <li><RightOutlined className='right-arrow-icon'/>Continuous improvement of product quality</li>,
            <li><RightOutlined className='right-arrow-icon'/>Flexible and cost-effective testing models</li>,
            <li><RightOutlined className='right-arrow-icon'/>Immediate availability of resources</li>,
            <li><RightOutlined className='right-arrow-icon'/>Real-time progress tracking and transparency</li>,
            <li><RightOutlined className='right-arrow-icon'/>Reliable system of Service Quality Metrics</li>,
        ]
    }
]

export default class QualityBlock1 extends Component {
    render() {
        return (
            <div style={{padding:'1.5em'}}>
                {
                blockdata.map((item,index)=>(
                    <Row style={{marginBottom:'3em'}}>
                        <Col style={{padding:'.4em'}}  xs={24} lg={12} md={12} sm={24}xl={12}>
                        <h2 className='dedicated-team-block2-h2'> {item.title}</h2>
                        
                       
                        </Col>
                        <Col  style={{padding:'.4em'}} xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                        {
                            item.para.map((itemi)=>(
                             
                                <p>{itemi}</p>
                              

                            )
                              
                            )
                            
                        }
                        </Col>
                        {/* <Divider className={`ant-divider-dedicate-${index} ant-divider-dedicate ant-divider-custom ` }/> */}
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            <h2 className='qa-block1-title-h2'>HOW DOES OUR MODEL WORKS</h2>
            <Divider/>
            {
                blockdata2.map((item,index)=>(
                    <Row  style={{marginBottom:'3em'}}>
                        <Col  xs={24} lg={8} md={8} sm={24}xl={8}>
                        <h2 style={{color:'#212529',fontSize:'21px',fontWeight:'700',lineHeight:'32px'}}> {item.title}</h2>
                        
                       
                        </Col>
                        <Col xs={24} lg={16} md={16} sm={24}xl={16} className='aboutblock3-col2' span={16}>
                             <p style={{fontSize:'initial'}}>{item.content}</p>  
                            
                        </Col>
                        <Divider className={`qa-divider${index} qa-divider `}/>
                       
                    
                        
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            <h2 className='qa-block-h2-2'>Zapiot Service Quality Metrics</h2>
            <p className='qa-block-p'>Achieve the desired software quality within a required timeframe. Our QA engineers can be integrated into your Scrum team or work as an independent unit. Each member of our Quality Control team is supervised by an experienced QA manager, responsible for estimating the progress, quality, and health of every software testing effort.</p>
            <p className='qa-block-p'>To help you monitor the team’s effectiveness, we grant you complete access to our task tracking system and prepare weekly reports using our elaborate Service Quality Metrics (SQM) system.</p>
            {
                blockdata3.map((item,index)=>(
                    <Row style={{marginBottom:'3em'}}>
                        <Col style={{padding:'.4em'}}  xs={24} lg={12} md={12} sm={24}xl={12}>
                        <h2 className='dedicated-team-block2-h2'> {item.title}</h2>
                        
                       
                        </Col>
                        <Col  style={{padding:'.4em'}} xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                        {
                            item.para.map((itemi)=>(
                             
                                <p>{itemi}</p>
                              

                            )
                              
                            )
                            
                        }
                        </Col>
                        
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
           
            </div>
        )
    }
}
