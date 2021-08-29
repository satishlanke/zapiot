import React, { Component } from 'react'
import axios from 'axios';
import woman from '../assets/bench/woman.png'
import man from '../assets/bench/man.png'
import { Link } from 'react-router-dom'
import designation from '../assets/bench/designation.png'
import category from '../assets/bench/category.png'
import map from '../assets/bench/map.png'
import rate from '../assets/bench/rate.png'
import avail from '../assets/bench/avail.png'
import office from '../assets/bench/office.png'
import meter from '../assets/bench/meter.png'
import achievement from '../assets/bench/achievement.png'
import keyskills from '../assets/bench/keyskills.png'
import { Row,Col } from 'antd'
import moment from 'moment'

export default class DetailJob extends Component {
    constructor(props){
        super(props);
        this.state={
            detail:[],
            id:this.props.match.params.id,
            job:[],
            keyskills:[]
            
        }
    }
    componentDidMount() {
       
        axios.get('http://localhost:5000/jobs/'+this.props.match.params.id)
          .then(res => {
            this.setState({ job: res.data,keyskills:res.data.keyskills });
            
          });
      

      }
    render() {
        console.log(this.state.keyskills)
        document.title = `${this.state.job.personName} | ${this.state.job.designation}`;
       
        return (
            <div>

            
            <div key={this.state.job._id} className={`job-div-1 `}  style={{width:'100%'}}>
                 <Row  className='main-ant-row-1'>
                    <Col lg={6}>
                    <div className="listImg2">
                    <img src={this.state.job.gender==="Male"? man : woman } style={{borderRadius:'50%'}} alt="candidate avatar"/>
                    </div>
                    </Col>
                    <Col lg={18}>
                    <Row>
                        <Col lg={12}>
                        <h3 className="fname-title">{this.state.job.personName}</h3>
                        <p><img src={designation} width="16" height="16" alt="designation"/>&nbsp;Designation : &nbsp;<span>{this.state.job.designation}</span></p>
                        <p><img src={category} width="16" height="16" alt="category"/>&nbsp;Category : &nbsp; {this.state.job.category}</p>
                        <p><img src={map} width="16" height="16" alt="location"/>&nbsp;Location : &nbsp;{this.state.job.location}</p>
                        </Col>
                        <Col lg={12}>
                        <p><img src={rate} width="16" height="16" alt="rate"/>&nbsp;Rate :&nbsp; {this.state.job.rate} (Hourly)</p>
                        <p><img src={achievement} width="16" height="16" alt="experience"/>&nbsp; Experience : &nbsp;{this.state.job.Exp} Year</p>
                        <p><img src={office}width="16" height="16" alt="Work From"/>Work From : &nbsp; {this.state.job.work} </p>
                        <p><img src={avail} width="16" height="16" alt="Availability"/>&nbsp;Availability :&nbsp; {this.state.job.availability}</p>
                        <p><img src={meter} width="16" height="16" alt="date"/>&nbsp;Active Date :&nbsp; {moment(this.state.job.activeDate).format('ll')} </p>
                        </Col>

                    </Row>
                    <Row>
                    <p className="para"><b><img src={keyskills} width="16" height="16" alt="Key Skills"/>&nbsp;Key Skills</b>:&nbsp;
                    {
                        this.state.keyskills.map((item1,index)=> <span key={index} className="block-skill">{item1}</span>)
                    }
                    
                   </p>
                    </Row>
                    </Col>
                </Row>
                
                {/* <FooterComp/> */}
               
                </div>
                <div>
                    <div>
                        <h4>key skills</h4>
                    </div>
                    {
                        this.state.keyskills.map((item1,index)=> <span key={index} className="block-skill">{item1}</span>)
                    }
                </div>

                </div>
        )
    }
}
