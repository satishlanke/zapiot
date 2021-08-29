import React, { Component } from 'react'
import { Row,Col,Divider } from 'antd'
import {RightOutlined}  from '@ant-design/icons';


const blockdata=[
    {
        title:'Building an extended team with Zapiot is just like opening your own remote development center, but without the hassle.',
        paradata:[`Whether you want to hire just one software developer or set up a cross-functional dedicated software development team – our cooperation model is flexible enough to meet your unique needs. We prescreen candidates based on your requirements, and then help you run as many interview rounds as you need to hire the right people.`,
        `Once you approve the members of your extended development team, they become your full-time employees, working from one of our four offices in Hyderabad. You manage your team directly, while we take care of infrastructure, developer retention, and administrative support.`],
        subtitle:'WE HAVE'
    
    },
    {
        title:'Infrastructure',
        paradata:[<li><RightOutlined className='right-arrow-icon'/> Comfortable offices in India largest tech cities — Hyderabad, Bengaluru, Mumbai, and Chennai</li>,
                <li><RightOutlined className='right-arrow-icon'/> Office managers that make sure your software developers have everything they need for work</li>,
                <li><RightOutlined className='right-arrow-icon'/> System administrators</li>,
                <li><RightOutlined className='right-arrow-icon'/> Office access control systems</li>,
                <li><RightOutlined className='right-arrow-icon'/> Additional security measures (if necessary)</li>
        ],
        subtitle:'WE OFFER'

    },
    {
        title:'Client and Developer Support',
        paradata:[
            <li><RightOutlined className='right-arrow-icon'/> A dedicated HR/Client Manager who facilitates communication between you and your team</li>,
            <li><RightOutlined className='right-arrow-icon'/> Regular reviews of the development team’s performance</li>,
            <li><RightOutlined className='right-arrow-icon'/> Analysis of your feedback regarding your team’s work quality</li>,
            <li><RightOutlined className='right-arrow-icon'/> Recurring evaluation of the developers’ job satisfaction</li>,
            <li><RightOutlined className='right-arrow-icon'/> Technical events and fun corporate outings</li>,

        ],
        subtitle:'ADDITIONAL PROS'
    },
    {
        title:'Administrative Support',
        paradata:[
            <li><RightOutlined className='right-arrow-icon' /> Accountants and legal advisors</li>,
            <li><RightOutlined className='right-arrow-icon'/> Payroll and taxes for your developers</li>
            

        ]
    }
]

export default class DedicatingBlock2 extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
            {
                blockdata.map((item,index)=>(
                    <Row style={{marginBottom:'3em'}}>
                        <Col style={{display:'flex',justifyContent:'space-between',flexDirection:'column'}} xs={24} lg={12} md={12} sm={24}xl={12}>
                        <h2 className='dedicated-team-block2-h2'> {item.title}</h2>
                        <h2 className='aboutblock3-h2-1'>{item.subtitle}</h2>
                       
                        </Col>
                        <Col xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                        {
                            item.paradata.map((itemi)=>(
                             
                                <p>{itemi}</p>
                              

                            )
                              
                            )
                            
                        }
                        </Col>
                        <Divider className={`ant-divider-dedicate-${index} ant-divider-dedicate ant-divider-custom ` }/>
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            
        </div>

        )
    }
}
