import React, { Component } from 'react'
import Topnav from '../components/Topnav'
import head from '../assets/qualtiy/head.PNG'
import '../styles/QualityAssurance.css'
import QualityBlock1 from '../components/QualityComp/QualityBlock1'
import InterestedEnviComp from '../components/InterestedEnviComp'
import QualityBlock2 from '../components/QualityComp/QualityBlock2'
import FaqComp from '../components/FaqComp'
import FooterComp from '../components/FooterComp'

export default class QualityAssurance extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div>
                    <img style={{width:'100%'}} src={head} alt='qa-head'/>
                </div>
                <div style={{backgroundColor:'#F5F5F5'}}>
                <div className='qa-block-margin' style={{marginLeft:'5em',marginRight:'5em'}}>
                    <QualityBlock1/>
                    
                </div>
                
                  </div>
                    
                    <InterestedEnviComp/>
                    <div>
                    <QualityBlock2/>
                    <FaqComp/>
                    </div>
                    <FooterComp/>
                    </div>
                    
        )
    }
}
