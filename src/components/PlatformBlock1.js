import React, { Component } from 'react'
import platform1 from '../assets/platform/platform1.png'
import platform2 from '../assets/platform/platform2.png'
import platform3 from '../assets/platform/platform3.png'
import platform4 from '../assets/platform/platform4.png'
import platform5 from '../assets/platform/platform5.jpg'
import platform6 from '../assets/platform/platform6.png'
import platform7 from '../assets/platform/platform7.png'
import { Row,Col } from 'antd'



const data=[
    {
       src:platform1,
       title:'Fund Manager',
       content:'Our ready to use solution framework for Mutual Fund houses helps to simplify and speed up business processes and reduce their dependence on RTAs for data' 
    },
    {
        src:platform2,
        title:'Qlicken',
        content:'Qlicken give analytics access to every decision maker in your organization to understand the full story behind your data and take data driven decisions. You don’t need to be a data scientist or DB expert to understand your own business information. Our comprehensive tool empowers you to drag-and-drop items to visualize clean analytics in any graphical form you wish.'
    },
    {
        src:platform3,
        title:'M360',
        content:'Trace your Mobile assets – Vehicle, Employees, Drivers, children, Parents instantly with any internet enabled device with a workflow. A  field force management software suite , M360 effectively manage and monitor your Field, Sales, Service force using location tracking, automated attendance, task management, expense management and order booking.'

    },
    {
        src:platform4,
        title:'CapTor',
        content:'The telecom industry is experiencing unprecedented changes – network transformation, innovative service bundling, and emerging content-distribution business models. Given this dynamic environment it is critical for Telcos to implement Revenue Assurance solution in a delivery model where the implications of the changes are owned by the solution provider. CapTor provides a revolutionary open source revenue assurance billing platform, intended for companies of all sizes, including Telcos, MVNOs, IoT companies, and the enterprise sector in general.'
    },
    {
        src:platform5,
        title:'ZenDev',
        content:'ZenDev a cloud-based drag and drop application development platform that empowers business users with no coding skills to build unlimited enterprise-grade applications. ZenDev includes an integrated cloud database, a visual Form builder with high grade security features. All business users with in a  company including  Sales, Support, HR, Delivery or Operations executive can automate all day-to-day activities without a line of code using ZenDev.'
    },
    {
        src:platform6,
        title:'ZetSell',
        content:'ZetSell an e-commerce store builder is a quick go online platform without any capital investment and coding. The platform offers both, E-commerce website & mobile app and makes it easy for you to launch your online business in a jiffy. The platform has dedicated and highly customisable templates across industries including Fashion, Grocery, Restaurant, Jewellery, Wholesale and many more.'
    },
    {
        src:platform7,
        title:'MSurvey',
        content:'MSurvey offers much more than simple surveying though our technology-driven platform which is highly capable to elevate your research to new levels. Our Survey platform helps organizations to source data through mobile based surveys and provides extensive reporting through dashboards, KPIs, Classification and comparison.'
    }
]

export default class PlatformBlock1 extends Component {
    render() {
        return (
            <div className='p-2'>
                <p style={{fontSize:'large',fontWeight:'400' ,marginTop:'2em',textAlign:'center'}}>Our Solution Accelerators are developed leveraging our years of extensive experience on emerging digital technologies, we have built innovative technology solutions for industry incumbents solving their critical business challenges.</p>
                {
                    data.map((item,index)=>{
                        return index %2===0? <Row key={index}>
                            <Col sm={24} xs={24} lg={12}md={12}>
                                <div className='p-5'>
                                 <img width='100%' src={item.src} alt=''/>
                                </div>
                               
                            </Col>
                            <Col sm={24} xs={24} lg={12}md={12}>
                                <div className='p-5 platform-content-class'>
                                     <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            
                            </Col>
                        </Row>
                        :
                        <Row key={index}>
                            
                            <Col sm={24} xs={24} lg={12}md={12}>
                                 <div className='p-5 platform-content-class'>
                                     <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                            <Col sm={24} xs={24} lg={12}md={12}>
                                 <div className='p-5'>
                                 <img width='100%' src={item.src} alt=''/>
                                </div>
                            </Col>
                        </Row>
                    })
                }
            </div>
        )
    }
}
