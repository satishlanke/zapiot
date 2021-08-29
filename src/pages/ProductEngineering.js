import React, { Component } from 'react'
import Topnav from '../components/Topnav'
import '../styles/ProductEngineering.css'
import head from '../assets/productengineer/head.PNG'
import ProductEnggBlock1 from '../components/ProductEnggBlock1'
import ProductEnggBlock2 from '../components/ProductEnggBlock2'
import { Link } from 'react-router-dom'
import ProductEnggBlock3 from '../components/ProductEnggBlock3'
import FooterComp from '../components/FooterComp'

export default class ProductEngineering extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <Topnav/>
                <div>
                    <img style={{width:'100%'}} src={head} alt='product head'/>
                </div>
                <div style={{backgroundColor:'#F5F5F5'}}>
                    <div className='devops-div-margin p-2'>
                        <ProductEnggBlock1/>
                      
                    </div>

                </div>
                <div >
                    <div className='devops-div-margin p-2'>
                        <ProductEnggBlock2/>
                      
                    </div>

                </div>
                <div className='pe-back-img'>
                    <h3 style={{color:'white',fontWeight:'bold'}}>Catapult your product development!</h3>
                    <Link className='pe-btn' to='/'>Take to our Experts !</Link>
                </div>
                <div >
                    <div className='devops-div-margin p-2'>
                        <ProductEnggBlock3/>
                      
                    </div>

                </div>
                <FooterComp/>
                
            </div>
        )
    }
}
