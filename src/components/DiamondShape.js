import React, { Component } from 'react';
import '../styles/DiamondShape.css'
import { Row, Col } from 'antd';


const diamondData =[
    {
        title:'1',
        content:'Share Your Needs',
       

    },
    {
        title:'2',
        content:'Interview & Hire Developers',
        design:'-'
        
    },
    {
        title:'3',
        content:'Start Working',
        design:'-'
         
    },
    {
        title:'4',
        content:'Ongoing Support',
        design:'-'
        
    }
    
]
export default class DiamondShape extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{marginTop:'5em',width:'90%'}}>
                <p className='services-heading'>OUR PROCESS</p>
                    <hr></hr>
                <Row className='our-process-row'  style={{marginTop:'5em',marginBottom:'2em',justifyContent:'center'}} gutter={[20,20]}>
                    {
                        diamondData.map((item)=>{
                            return(
                                <Col xs={24} lg={6} md={6} xs={24} style={{maxWidth:'16%'}} span={6}>
                                   <div className='diamond'>
                                       <h2>{item.title}</h2>
                                        
                                    </div>
                                    {/* <p className="hr-diamond">{item.design}</p> */}
                                    
                                    <div style={{textAlign:'center',marginTop:'2em',marginRight:'6em',fontWeight:'500'}} >{item.content}</div>

                                     </Col>
                                
                            )
                        })
                    }
                    
                </Row>
                
                
                
            </div>
        )
    }
}
