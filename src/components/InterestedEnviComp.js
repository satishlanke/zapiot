import React, { Component } from 'react'
import { Row,Col } from 'antd'
import { Link } from 'react-router-dom'



export default class InterestedEnviComp extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#224468',minHeight:'200px'}}>
                     <div  style={{marginLeft:'5em',marginRight:  '5em'}}>
                <Row >
                    <Col sm={24} lg={8} md={8} xs={24} style={{display:'flex',flexDirection:'column',marginTop:'2em',justifyContent:'center',alignItems:'center'}}>
                    <div style={{textAlign:'center'}} className='envi-icon'>
                        <div className='round-envi'>
                        <i aria-hidden="true" class="fas fa-envelope"></i>
                        </div>
                    
                    </div>
                    
                    </Col>
                    <Col sm={24} lg={16} md={16} xs={24} style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'left'}}>
                        <h2 style={{color:'white',fontWeight:'400'}}>Interested in our services?</h2>
                        <Link className='letstalk-btn' to='/'>LET'S TALK</Link>
                    </Col>
                </Row>
                
            </div>
            </div>
           
        )
    }
}
