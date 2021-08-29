import React, { Component } from 'react'
import { Row,Col,Divider } from 'antd'
import {RightOutlined}  from '@ant-design/icons';

const data=[
    {
        title:'1.Discover the Problem',
        content:'The collaboration with DevOps engineers begins with a workshop where the client shares concerns, shows bottlenecks, and identifies the pain points of the product that need to be addressed.'
    },
    {
        title:'2.Create a Proof of Concept',
        content:'When the client and the DevOps engineer identify a problematic area, the latter comes up with a low-fidelity solution. Since solutions always involve multiple tools and services, they are commonly visualized in a proof of concept (POC)'
    },
    {
        title:'3.Build a Minimum Viable Product',
        content:'Having a working POC approved by the client, the DevOps engineer builds an MVP and identifies the toolset required for the infrastructure.'
    },{
        title:'4.Implementation',
        content:'The final step of the collaboration – concept implementation – can be performed either by the Zapiot DevOps engineer or on the side of the client.'
    },{
        title:'5.Support',
        content:'The DevOps engineer can continue supporting the product, scale it, and maintain its excellent performance on your request.'
    }
]
const data2 =[
    {
        title:'On demand',
        content:'We offer on-demand DevOps services to tech teams that need assistance and want to engage DevOps engineers for a limited period of time. DevOps as a service allows you to work with an engineer as long as you need to fix the problem'
    },
    {
        title:'Advisory Workshop',
        content:'Embark on one-on-one collaborative sessions to assess your pain points, platform and delivery processes, monitoring capabilities, and organization culture. Work with Zapiot finest DevOps engineers and receive tailor-made recommendations and strategic roadmaps that will make your processes work towards your business goals.'
    },
    {
        title:'Support',
        content:'Support your existing product or the one you have built with Zapiot DevOps engineers. Our specialists can ensure stable performance and productivity of your product.'
    }
]
const data3 =[
    {
        title:'Cloud',
        content: <li><RightOutlined className='right-arrow-icon'/>AWS, Azure, GCP</li>
    },
    {
        title:'CI / CD',
        content:<li><RightOutlined className='right-arrow-icon'/>Jenkins, Bamboo, GoCD, CircleCI, TravisCI, TeamCity, Octopus, Azure DevOps</li>
    },
    {
        title:'Container orchestration',
        content:<li><RightOutlined className='right-arrow-icon'/>Kubernetes, Amazon ECS, Hashicorp Nomad, Docker Swarm</li>
    },
    {
        title:'Automation',
        content:<li><RightOutlined className='right-arrow-icon'/>New Relic, AWS CLoudWatch, Azure Monitor, DataDog, Prometheus, Elasticsearch, Splunk</li>
    }

]
export default class DevopsBlock2 extends Component {
    render() {
        return (
            <div className='p-2'>
                <h2 className='qa-block-h2-2 p-2'>Workflow for DevOps Services</h2>
                {
                data.map((item,index)=>(
                    <Row  style={{marginBottom:'1em'}}>
                        <Col  xs={24} lg={8} md={8} sm={24}xl={8}>
                        <h2 style={{color:'#212529',fontSize:'21px',fontWeight:'700',lineHeight:'32px'}}> {item.title}</h2>
                        </Col>
                        <Col xs={24} lg={16} md={16} sm={24}xl={16} className='aboutblock3-col2' span={16}>
                             <p style={{fontSize:'initial',fontWeight:'400'}}>{item.content}</p>          
                        </Col>
                    </Row>
                    ))}
                <h2 className='qa-block-h2-2 p-2'>Zapiot Engagement Models for DevOps Services</h2>
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
             <h2 className='qa-block-h2-2 p-2'>Common Technologies</h2>
             <Divider/>
                {
                data3.map((item,index)=>(
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
        )
    }
}
