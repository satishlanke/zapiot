import React, { Component } from 'react'
// import CardMain from '../components/CardMain'
import Topnav from '../components/Topnav'
import '../styles/ServicesPage.css'
import FooterComp from '../components/FooterComp'
import IndustryCards from '../components/IndustryCards'


export default class IndustriesPage extends Component {
    render() {
        return (
            <div>
                <Topnav/>
                <div className=' servicePage-block1'>
                    
                    <h2>Industries</h2>
                    <p style={{fontSize:'initial',fontWeight:'500'}}>We help tech companies quickly scale up their businesses and add expertise by augmenting their local teams with top developers in India. Zenoire have experience in building custom-recruited software development teams for 300+ clients coming from a wide range of industries, including the most popular ones: telecom software development, education, healthcare, ecommerce, fintech, travel and hospitality.</p>
                </div>
                <div style={{marginTop:'8vh',marginBottom:'3vh',marginLeft:'5em',marginRight:'5em'}}>
                        <IndustryCards/>
                    </div>
                    <FooterComp/>
                
            </div>
        )
    }
}
