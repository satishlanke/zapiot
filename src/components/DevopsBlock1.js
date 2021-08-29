import React, { Component } from 'react'
import { Row,Col,Divider } from 'antd'
import {RightOutlined}  from '@ant-design/icons';

const data1=[
    {
        title:'Use Zapiot DevOps Services if You:',
        para:[
            <li><RightOutlined className='right-arrow-icon'/>Need ongoing assistance of a professional DevOps engineer</li>,
            <li><RightOutlined className='right-arrow-icon'/>Are searching for temporary DevOps engineering assistance for your project</li>,
            <li><RightOutlined className='right-arrow-icon'/>Need to increase the capacity, security, or scalability of your infrastructure</li>,
            <li><RightOutlined className='right-arrow-icon'/>Want to set up efficient collaboration between the programmers and the operations teams</li>,
            <li><RightOutlined className='right-arrow-icon'/>Find yourself in need of an additional DevOps engineer to set up a development infrastructure</li>,
            

        ]
    }
]
const data2=[
    {
        title:'Accelerated Development Processes',
        content:'Reduce the deployment time by half and roll out new improvements faster by allowing your DevOps engineer to orchestrate and automate the deployment process.'
    },
    {
        title:'Improved Release Reliability',
        content:'DevOps engineers can help you build an efficient delivery lifecycle with great planning, building, testing, and deployment processes. Engage DevOps engineers to accelerate release management by building transparent collaboration and shorter feedback loops.'
    },
    {
        title:'Faster Testing Processes',
        content:'Save time and money on fixing by implementing DevOps best practices and tools. This way, you’ll be able to identify and eliminate defects before they go into production.'
    },
    {
        title:'Continuous Application Monitoring',
        content:'Use DevOps services to respond to customers’ needs faster. Benefit from advanced application and infrastructure monitoring systems and faster release frequency.'
    },
    {
        title:'Stable, Scalable, and Secure Infrastructure',
        content:'With all the processes, operations, and infrastructure organized right, you can easily scale your product and enjoy its stable performance.'
    },
    
]
export default class DevopsBlock1 extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#F5F5F5' }}>
                <div style={{padding:'1em'}}>
                <p style={{fontSize:'initial',fontWeight:'400'}}>As your product evolves, the once-effective processes and approaches begin to slow down the pace of innovation. This is when you should think about inviting a DevOps engineer to join your tech team. A DevOps engineer or an SRE will introduce a culture of continuous improvement, build better processes between programmers and operations, advise on the appropriate set of tools for them, and make your infrastructure scalable, secure, and stable.</p>
                <Divider/>
                </div>
                {
                data1.map((item,index)=>(
                    <Row style={{marginBottom:'3em'}}>
                        <Col style={{padding:'.4em'}}  xs={24} lg={12} md={12} sm={24}xl={12}>
                        <h2 className='dedicated-team-block2-h2'> {item.title}</h2>
                        </Col>
                        <Col  style={{padding:'.4em'}} xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                        { item.para.map((itemi)=>(    
                                <p>{itemi}</p>))
                            
                        }
                        </Col>
                        
                    </Row>
                )) }
              <h2 className='qa-block-h2-2'>Key Benefits of DevOps Services by Zapiot</h2>
              <p style={{fontSize:'initial'}}>Our DevOps engineers focus on continuous improvement and can deliver:</p>
              <div style={{padding:'1em'}}> 
              {
                data2.map((item,index)=>(
                    <Row  style={{marginBottom:'1em'}}>
                        <Col  xs={24} lg={8} md={8} sm={24}xl={8}>
                        <h2 style={{color:'#212529',fontSize:'21px',fontWeight:'700',lineHeight:'32px'}}> {item.title}</h2>
                        </Col>
                        <Col xs={24} lg={16} md={16} sm={24}xl={16} className='aboutblock3-col2' span={16}>
                             <p style={{fontSize:'initial',fontWeight:'400'}}>{item.content}</p>          
                        </Col>
                    </Row>
                    ))}
                

              </div>
              
                
            </div>
        )
    }
}
