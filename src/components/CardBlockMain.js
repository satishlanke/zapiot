import React, { Component } from 'react'
import { Row, Col } from 'antd';
import '../styles/CardBlockMain.css';

const CardBlockMainData=[
    {
        title:'Access to Top Talent',
        content:'With 200K+ IT specialists on the market, we can find developers with popular and rare tech skills through our global partner network.'
    },
    {
        title:'Value-driven Engineers',
        content:'Build your product with talented Indian software engineers dedicated to your values and goals.'
    },
    {
        title:'Simple Model',
        content:'You can focus on product development while Zapiot will cover legal, administrative, and HR aspects of collaboration. No need to bear Bench cost, pure Pay as you Go model.'
    },
    {
        title:'Cost Efficiency',
        content:'Zapiot offers the best value to money ratio and covers the expenses associated with the attraction and retention of top-notch software engineers.'
    },
    {
        title:'Ready to Deploy Skills',
        content:'Consultants deployed directly from our B2B based partner network and hence Verified Skills – No duplications, No aborts, No no-shows and No Notice periods. Hire the Best Developer within 72 Hours.'
    },

]

export default class CardBlockMain extends Component {
    render() {
        return (
            <div>
               <Row gutter={[16, 16]}>
                   {
                       CardBlockMainData.map((item)=>{
                           return(
                            <Col  span={8} xs={24} lg={8} md={8} sm={24} className='p-3 CardBlockMain'>
                               <hr></hr>
                                <h2>{item.title}</h2>
                                <p>{item.content}</p>
                            </Col>
                           )
                       })
                   }
                        
                        
                </Row>
                
            </div>
        )
    }
}
