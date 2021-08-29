import React, { Component } from 'react'

import { Row,Col,Divider } from 'antd'

const blockdata =[
    {
        title:'Custom recruitment',
        content:'You’ll never work with someone from our bench – we don’t have one! We initiate the recruitment process only after clarifying your requirements, and you interview the candidates yourself.'
    },
    {
        title:'High developer commitment',
        content:'Zapiot software developers are your full-time employees, and they’re as dedicated to your success as your in-house team.'
    },
    {
        title:'Direct communication',
        content:'You, your tech lead, or your project manager communicate with the dedicated development team directly. No middlemen, no miscommunication.'
    },
    {
        title:'Predictable costs',
        content:'You pay your developers’ salaries and a flat monthly fee for our services.'
    },
    {
        title:'Flexibility',
        content:'Change team size with only one month’s notice. Request advanced IT security. Travel to our offices to work alongside your software developers or bring them over to your headquarters.'
    }
]
export default class DedicateTeamModel extends Component {
    render() {
        return (
            <div   style={{marginLeft:'5em',marginRight:'5em'}} className=''>
                <h2 className='dedicate-team-h2'>Why Choose the Extended Team Model Over Project Outsourcing?</h2>
                {
                blockdata.map((item,index)=>(
                    <Row  style={{marginBottom:'3em'}}>
                        <Col  xs={24} lg={8} md={8} sm={24}xl={8}>
                        <h2 style={{color:'#212529',fontSize:'21px',fontWeight:'700',lineHeight:'32px'}}> {item.title}</h2>
                        
                       
                        </Col>
                        <Col xs={24} lg={16} md={16} sm={24}xl={16} className='aboutblock3-col2' span={16}>
                             <p style={{fontSize:'initial'}}>{item.content}</p>  
                             <Divider className='ant-divider-dedicate-teammodel'/>
                        </Col>
                       
                    
                        
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            </div>
        )
    }
}
