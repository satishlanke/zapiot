import React, { Component } from 'react'
import '../styles/DedicatedTeam.css'
import head from'../assets/dedicatedteam/header.PNG'
import Topnav from '../components/Topnav'
import DedicatedBlock1 from '../components/DedicatedBlock1'
import DedicatingBlock2 from '../components/DedicatingBlock2'
import InterestedEnviComp from '../components/InterestedEnviComp'
import DedicateTeamModel from '../components/DedicateTeamModel'
import FaqComp from '../components/FaqComp'
import FooterComp from '../components/FooterComp'

export default class DedicatedTeam extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div>
                    <img style={{width:'100%'}} src={head} alt='dedicated team'/>
                </div>
                <div  style={{backgroundColor:'#F5F5F5'}} className='p-5'>
                    <DedicatedBlock1/>
                    <DedicatingBlock2/>
                </div>
                <div style={{backgroundColor:'#224468' ,minHeight:'200px'}}>
                    <InterestedEnviComp/>

                </div>
                <div>
                    <DedicateTeamModel/>
                    <FaqComp/>
                </div>

                <FooterComp/>
            </div>
        )
    }
}
