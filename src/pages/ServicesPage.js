import React, { Component } from 'react'
import CardMain from '../components/CardMain'
import Topnav from '../components/Topnav'
import '../styles/ServicesPage.css'
import FooterComp from '../components/FooterComp'


export default class ServicesPage extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div className=' servicePage-block1'>
                    
                    <h2>Services</h2>
                    <p>Zapiot provides extended development teams to customers worldwide, helping them overcome talent shortage, utilize the latest tech, and drive revenue growth. We can also help Internet-based businesses and product companies design and develop cloud-native web and mobile solutions. We drive digital transformation for businesses by helping them provide a rich, seamless experience to their customers across digital channels resulting in higher engagement, efficiency, and profitability.</p>
                </div>
                <div style={{marginTop:'8vh',marginBottom:'3vh',marginLeft:'5em',marginRight:'5em'}}>
                        <CardMain className='card-service'/>
                    </div>
                    <FooterComp/>
                
            </div>
        )
    }
}
