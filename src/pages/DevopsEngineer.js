import React, { Component } from 'react'
import Topnav from '../components/Topnav'
import '../styles/DevopsEngineer.css'
import head from '../assets/devops/head.PNG'
import DevopsBlock1 from '../components/DevopsBlock1'
import DevopsBlock2 from '../components/DevopsBlock2'
import FaqComp from '../components/FaqComp'
import FooterComp from '../components/FooterComp'

import InterestedEnviComp from '../components/InterestedEnviComp'
export default class DevopsEngineer extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div>
                    <img src={head} style={{width:'100%'}} alt='devopshead'/> 
                </div>
                <div style={{backgroundColor:'#F5F5F5'}}>
                    <div className='devops-div-margin'>
                        <DevopsBlock1/>

                    </div>

                </div>
                <InterestedEnviComp/>
                <div style={{backgroundColor:'#F5F5F5'}}>
                    <div className='devops-div-margin'>
                        <DevopsBlock2/>
                        <FaqComp/>
                        </div>
                        </div>
                        <FooterComp/>
            </div>
        )
    }
}
