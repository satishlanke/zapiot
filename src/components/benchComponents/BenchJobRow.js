import React, { Component } from 'react'
import woman from '../../assets/bench/woman.png'
import man from '../../assets/bench/man.png'
import { Link } from 'react-router-dom'
import designation from '../../assets/bench/designation.png'
import category from '../../assets/bench/category.png'
import map from '../../assets/bench/map.png'
import rate from '../../assets/bench/rate.png'
import avail from '../../assets/bench/avail.png'
import office from '../../assets/bench/office.png'
import meter from '../../assets/bench/meter.png'
import achievement from '../../assets/bench/achievement.png'
import keyskills from '../../assets/bench/keyskills.png'
import { Row,Col } from 'antd'
import moment from 'moment'
import ReactPaginate from 'react-paginate';
// import { Pagination } from 'antd';





export default class BenchJobRow extends Component {
    constructor(props){
        // console.log(props,'componentProps1')

        super(props);
        this.state={
            data:this.props.jobRowData,
            
            

        }
        // console.log(this.props,'componentProps2')
        
        
    }
    
    render() {
        // console.log(this.state.data,'comp')
       
        return (
            <div className='Bench-job-row-main' style={{width :'100%'}}>
                
            
            
                {
                    this.props.jobRowData && this.props.jobRowData.map((item)=>{
                        return(
                            <Link key={item._id} className='benchjobrow-Link' target='_blank' to={`/bench/${item._id}`}>
                            <div key={item._id} className={`job-div-1 `}  style={{width:'100%'}}>
                 <Row  className='main-ant-row-1'>
                    <Col lg={6}>
                    <div className="listImg2">
                    <img src={item.gender==="Male"? man : woman } style={{borderRadius:'50%'}} alt="candidate avatar"/>
                    </div>
                    </Col>
                    <Col lg={18}>
                    <Row>
                        <Col lg={12}>
                        <h3 className="fname-title">{item.personName}</h3>
                        <p><img src={designation} width="16" height="16" alt="designation"/>&nbsp;Designation : &nbsp;<span>{item.designation}</span></p>
                        <p><img src={category} width="16" height="16" alt="category"/>&nbsp;Category : &nbsp; {item.category}</p>
                        <p><img src={map} width="16" height="16" alt="location"/>&nbsp;Location : &nbsp;{item.location}</p>
                        </Col>
                        <Col lg={12}>
                        <p><img src={rate} width="16" height="16" alt="rate"/>&nbsp;Rate :&nbsp; {item.rate} (Hourly)</p>
                        <p><img src={achievement} width="16" height="16" alt="experience"/>&nbsp; Experience : &nbsp;{item.Exp} Year</p>
                        <p><img src={office}width="16" height="16" alt="Work From"/>Work From : &nbsp; {item.work} </p>
                        <p><img src={avail} width="16" height="16" alt="Availability"/>&nbsp;Availability :&nbsp; {item.availability}</p>
                        <p><img src={meter} width="16" height="16" alt="date"/>&nbsp;Active Date :&nbsp; {moment(item.activeDate).format('ll')} </p>
                        </Col>

                    </Row>
                    <Row>
                    <p className="para"><b><img src={keyskills} width="16" height="16" alt="Key Skills"/>&nbsp;Key Skills</b>:&nbsp;

                    {
                        item.keyskills.map((item1,index)=> <span key={index} className="block-skill">{item1}</span>)
                    }
                   </p>
                    </Row>
                    </Col>
                </Row>
                </div>
                </Link>
                        )
                    })
                }
                
          
            </div>
                    
                    


        )
    }
}
