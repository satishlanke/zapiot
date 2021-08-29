import React, { Component } from 'react'
// import { Row, Col } from 'antd';

const paradata= [
    {
        para:'Zapiot team had a solid background in hiring and outsourcing IT contractors and developers from all over the world. Over time, we realized that things needed to change when it came to the way companies found the IT contractors. The worldwide demand for top developers was already enormous and fluid resourcing would only continue to grow but the current gateways were far from perfect.'
    },
    {
        para:'Zapiot offers a unique B2B staffing services a combine aspects of traditional consulting companies with larger outsourcing companies and bench resources platforms into one. Our platform connects top developers on bench to the clients worldwide seamlessly on a B2B model. Zapiot uses a customised and unique qualification process through a digital platform to gather and offer only the best talent out there.'
    }
]

export default class DedicatedBlock1 extends Component {
    render() {
        return (
            <div>
                {paradata.map((item)=>{
                    return(
                        <p style={{fontSize:'initial',fontWeight:'400'}} className='dedi-block1-para'>{item.para}</p>
                    )
                })}
            </div>
        )
    }
}
