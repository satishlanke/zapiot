import React, { Component } from 'react'
import Topnav from '../components/Topnav'
import head from '../assets/platform/head.PNG'
import PlatformBlock1 from '../components/PlatformBlock1'
import '../styles/PlatformPage.css'
import { Link } from 'react-router-dom'
import FooterComp from '../components/FooterComp'


export default class PlatformPage extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div>
                    <img style={{width:'100%'}} src={head} alt='product head'/>
                </div>
                <div style={{backgroundColor:'#F5F5F5'}}>
                    <div className='devops-div-margin p-2'>
                        <PlatformBlock1/>
                       
                      
                    </div>

                </div>
                <div className='pe-back-img'>
                    <h3 style={{color:'white',fontWeight:'bold'}}>Looking for customized technology solutions to cater your technology needs?</h3>
                    <Link className='pe-btn' to='/'>Take to our Experts !</Link>
                </div>
                <FooterComp/>
            </div>
        )
    }
}
