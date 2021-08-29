import React, { Component } from 'react'
import {Row ,Col} from 'antd'
import {RightOutlined}  from '@ant-design/icons';


const data1=[
    {
        col1:[<h2 className='pe-grid-h2'>Common ASK / Problems of Product Companies</h2>,
        <li><RightOutlined className='right-arrow-icon'/>GTM fast with MVP approach</li>,
        <li><RightOutlined className='right-arrow-icon'/>Product is never complete</li>,
        <li><RightOutlined className='right-arrow-icon'/>In-premise is dead, Cloud is the new normal</li>,
        <li><RightOutlined className='right-arrow-icon'/>User-experience is critical</li>,
        <li><RightOutlined className='right-arrow-icon'/>Data driven decisions</li>,
        <li><RightOutlined className='right-arrow-icon'/>GTM fast with MVP approach</li>,
        <li><RightOutlined className='right-arrow-icon'/>Scale with continuously changing technology landscape</li>,
       

    ]
    },
    {
        col1:[<h2 className='pe-grid-h2'>DNA of our Product Engineering Practices</h2>,
        <li><RightOutlined className='right-arrow-icon'/>Design-led engineering</li>,
        <li><RightOutlined className='right-arrow-icon'/>Respond to change and pivot fast</li>,
        <li><RightOutlined className='right-arrow-icon'/>DevOps and CICD led processes</li>,
        <li><RightOutlined className='right-arrow-icon'/>Ability to manage chaos and uncertainty</li>,
        <li><RightOutlined className='right-arrow-icon'/>Lean processes, Agile mindset</li>,
        <li><RightOutlined className='right-arrow-icon'/>Partners rather than vendors</li>,
        <li><RightOutlined className='right-arrow-icon'/>Scale with continuously changing technology landscape</li>,
       

    ]
    }
]

export default class ProductEnggBlock1 extends Component {
    render() {
        return (
            <div className='p-2'>
                <p style={{fontSize:'large',fontWeight:'400'}}>
                Faster time to market, superior customer experience and continuous evolution in the midst of uncertainties are the top challenges of disruptive product companies, hi-tech start-ups and internet businesses. Our software product development services are designed to accelerate product development and bring business agility. We have helped 200+ product companies transform their ideas into market realities by solving most complex engineering challenges.
                </p>
                <h2 className='pe-block1-h2'>We know what it takes to build a great product</h2>
                <Row>
                {
                data1.map((item,index)=>( 
                        <Col xs={24} lg={12} md={12} sm={24}xl={12} className='aboutblock3-col2' >
                        {
                            item.col1.map((itemi)=>(
                                <p>{itemi}</p>
                            ))    
                        }
                        </Col>
                        )
                        )}
                        </Row>
                
               
                    
                   

        


            </div>
        )
    }
}
