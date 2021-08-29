import React, { Component } from 'react'
import CountUp from 'react-countup';
import '../styles/ZapiotCountup.css'
import { Row, Col } from 'antd';

const countupData =[
    {
        end:4,
        title:'Offices in 2 countries'
    },
    {
        end:10,
        title:'Years of Experience'
    },
    {
        end:18,
        title:'Products Built for Startups'
    },
    {
        end:90,
        title:'Customers Served'
    },
    {
        end:250,
        title:'Experts on Board'
    },
    {
        end:1000,
        title:'Tech Specialists Accessible'
    },
    

]

export default class ZapiotCountup extends Component {
    render() {
        return (
            <div>
                <h2 className='about-block2-h2'>Zapiot In Numbers</h2>

                <Row className='countup-row'>
                    {
                        countupData.map((item,index)=>{
                            return(index===0?
                                <Col style={{height:'100%'}} sm={24} lg={4} md={4} xs={24} xl={4}>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',alignItems:'center'}}>
                                <CountUp style={{color:'#F8A02B',fontWeight:'bold',fontSize: '2.5em'}} end={item.end}
                                
                                duration={10} />
                                <h6 className='countup-h6'>{item.title}</h6>
                            </div>
                                </Col> 
                            
                                :
                                <Col style={{height:'100%'}} sm={24} lg={4} md={4} xs={24} xl={4}>
                                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                                <CountUp end={item.end} style={{color:'#F8A02B',fontWeight:'bold',fontSize: '2.5em'}}
                                suffix='+'
                                duration={10} />
                            <h6 className='countup-h6'>{item.title}</h6>
                                </div>
                                </Col>
                                

                            )
                        })
                    }
                   
                </Row>
               
            </div>
        )
    }
}
