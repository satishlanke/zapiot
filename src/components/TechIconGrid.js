import React, { Component } from 'react'
import { Row, Col } from 'antd';
import angular from '../assets/mainpage/angular.png';
import dotnet from '../assets/mainpage/dotnet.png';
import frontend from '../assets/mainpage/frontend.png';
import fullstack from '../assets/mainpage/fullstack.png';
import javascript from '../assets/mainpage/javascript.png';
import magento from '../assets/mainpage/magento.png';
import nodejs from '../assets/mainpage/node-js.png';
import php from '../assets/mainpage/php.png';
import react from '../assets/mainpage/react.png';
import scala from '../assets/mainpage/scala.png';
import spring from '../assets/mainpage/spring.png';
import java from '../assets/mainpage/java.png';

import '../styles/TechIconGrid.css'
const TechIconData = [
    {
        src:angular,
        title:'Angular'
    },
    {
        src:dotnet,
        title:'Dotnet'
    },
    {
        src:frontend,
        title:'Frontend'
    },
    {
        src:fullstack,
        title:'FullStack'
    },
    {
        src:javascript,
        title:'Javascript'
    },
    {
        src:magento,
        title:'Magento'
    },
    {
        src:nodejs,
        title:'Node-js'
    },
    {
        src:php,
        title:'Php'
    },
    {
        src:react,
        title:'React'
    },
    {
        src:scala,
        title:'Scala'
    },
    {
        src:spring,
        title:'Spring'
    },
    {
        src:java,
        title:'Java'
    }
]


export default class TechIconGrid extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Row gutter={[16, 16]}>
                    {
                        TechIconData.map((item)=>{
                            return(
                                <Col span={4} lg={4} sm={12} xs={24} md={4} xl={4}  >
                                    <div className='column-box'>
                                    <img src={item.src} style={{maxWidth:'119px'}} alt='angular'/>
                                    <p>{item.title}</p>
                                    <hr className='border-small'></hr>
                                    </div>
                                    

                                </Col>
                            )
                        })
                    }
                </Row>
                
            </div>
        )
    }
}
