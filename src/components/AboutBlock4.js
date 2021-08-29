import React, { Component } from 'react'
const blockdata=[
    {
        para:'The Zapiot India software development centred in Hyderabad consist of over 6,000 square feet of space and it maintains a robust corporate and technological infrastructure to ensure that we provide world-class service to all of our customers.'
    },
    {
        para:'We have fully dedicated high-speed Internet connectivity and Multimedia corporate training center.'
    },
    {
        para:'We offer fully secure, state-of-the-art data center providing web hosting and application support.'
    },
    {
        para:'We have a dedicated Satellite link for our offshore subsidiary with 100-node internal network.'
    },
    {
        para:'Our Software development labs feature hardware and software for most major operating systems/development platforms as well as standard software development tools.'
    },
    {
        para:'Robust telecommunications infrastructure for video conferencing and Voice over IP (VOIP).'
    },
    {
        para:[
            `State-of-the-art security measures:`,
            <li>Facilities: badge/lock access, 24×7 monitoring, automated alarm systems</li>,
            <li>Systems/Network/Communications: password protected access, anti-intrusion measures, industry standard encryption</li>,
            <li>Personnel: background checks, mandatory confidentiality and non-disclosure agreements</li>
        ]
    },
    {
        para:'Proven back-up/disaster recovery capabilities'
    }
]
export default class AboutBlock4 extends Component {

    render() {
        return (
            <div>
                {
                    blockdata.map((item)=>{
                        return(
                            <p>{item.para}</p>
                        )
                    })
                    
                }
                
            </div>
        )
    }
}
