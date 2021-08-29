import React, { Component } from 'react'
import { Row,Col } from 'antd'
import {RightOutlined}  from '@ant-design/icons';
const faqdata=[
    {
        title:`I'm only looking for 1 developer. Can you help?`,
        content: <li><RightOutlined className='right-arrow-icon'/>Yes!</li>
    },
    {
        title:`What if I want to expand my team to 20 people?`,
        content:<li><RightOutlined className='right-arrow-icon'/>We have lots of big teams, so it's not a problem</li>
    },
    {
        title:`We want developers with Agile experience. Do you do that?`,
        content:<li><RightOutlined className='right-arrow-icon'/>We sure do. We even have an Agile consultant on staff.</li>
    }
]

export default class FaqComp extends Component {
    render() {
        return (
            <div style={{padding:'5em'}} className=''>
                <h2 className='faq-h2'>Frequently Asked Questions</h2>
                {
                faqdata.map((item,index)=>(
                    <Row key={index} style={{marginBottom:'3em'}}>
                        <Col  xs={24} lg={12} md={12} sm={24}xl={12}>
                        <h2 className='dedicated-team-block2-h2'> {item.title}</h2>
                       
                       
                        </Col>
                        <Col xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' span={16}>
                            <p>{item.content}</p>
                                </Col>
                        {/* <Divider className={`ant-divider-dedicate-${index} ant-divider-dedicate ant-divider-custom ` }/> */}
                    </Row>
                   
                    
                  
                )
                )
                
                
            }
            
                
            </div>
        )
    }
}
