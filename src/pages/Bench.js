import React, { Component } from 'react'
import { Row,Col,Select } from 'antd'
import '../styles/Bench.css'
import BenchFilter from '../components/benchComponents/BenchFilter';
import BenchJobRow from '../components/benchComponents/BenchJobRow';
import axios from 'axios'
// import { Link } from 'react-router-dom';
import BenchNav from '../components/BenchNav'
import _ from "lodash";
import { Redirect } from 'react-router';

// import { Typeahead } from 'react-bootstrap-typeahead'; 
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {   Form } from 'reactstrap';

import ReactPaginate from 'react-paginate';
import {store} from '../Routes/CompRouter';




const { Option } = Select;





export default class Bench extends Component {
    // static contextType = store;
    
    constructor(props){
        super(props);
        this.state={
            data: [],
            offset: 0,
            jobRowData:[],
            jobRowDataTemp:[],
            token:'',
            dataSourceLocation:[],
            minRate:'',
            maxRate:'',
            minExp:'',
            maxExp:'',
            location:'',
            gender:'',
            work:'',
            availability:'',
            keyskills:[],
            exp:[],
            rate:[],
            dataSourcekeySkills:[]
          }
          this.getauth=()=>{
            axios.get('http://localhost:5000/myprofile',{
                headers: {
                    'x-token' : this.state.token
                }
            }).then(res => this.setState({token:res.data})).catch((err) => console.log(err))
          }
         
          this.sliderChangeRate =(event)=>{
           
            this.setState(
                {rate:event}

            )
            

        }
        this.sliderChangeExp =(event)=>{
          
            this.setState(
                {exp:event}

            )
            
        }
          
          this.SearchchangeHandler =(selected)=>{
           
            this.setState(
                
                {keyskills:selected}

            )
          

        }
          this.SelectchangeHandler =(value)=>{
           
            this.setState(
                {...this.state,work:value}

            )

        }
        this.LocationchangeHandler =(selected)=>{
           
            this.setState(
                {...this.state,location:selected}

            )

        }
        this.GenderSelectchangeHandler =(value)=>{
           
            this.setState(
                {...this.state,gender:value}

            )

        }
        this.AvailSelectchangeHandler =(value)=>{
           
            this.setState(
                {...this.state,availability:value}


            )
            console.log(this.state)

        }   
        this.clearfilter = async(e)=>{
            this.setState({jobRowDataTemp:[],keyskills:[]})
            this.getJobrowdata()

        }
        
            this.submitHandler = async(e)=>{
                // console.log("submitting")
                e.preventDefault();
                let filterby ={'location':this.state.location,'work':this.state.work,'gender':this.state.gender,
                                            "availability":this.state.availability}
                const jobRowDataTemp =this.state.jobRowData
                let result = _.filter(jobRowDataTemp, function(o) {
                    return _.every(filterby, function(v, k) {
                      return _.includes(o[k], v);
                    });
                  });
                  let resultsearch = []
                  
                    result.forEach(entry => {

                    //    console.log(this.state.rat)
                      if (this.state.rate[0]>= entry.rate )
                      {
                        resultsearch.push(entry)
                      }
                      else if(this.state.rate[1] <= entry.rate )
                      {
                        resultsearch.push(entry)
                      }
                      
                    })
                    console.log(resultsearch)
               
                  
                 
                this.setState({jobRowDataTemp:resultsearch.length>0 
                                                ? resultsearch : result
                                            })

                
            }
            this.searchSubmit = async(e)=>{
                if(this.state.keyskills<1){
                e.preventDefault();
                    
                }
                else{

                
                
                e.preventDefault();
                let filterby =this.state.keyskills
                // console.log(filterby[0])
                const keyskillsFiltered=[]
                // await this.getJobrowdata()
                this.state.jobRowData.forEach(entry => {
                    entry['keyskills'].forEach(run => {
                      if(filterby.includes(run))
                      keyskillsFiltered.push(entry)
                    })
                  })
               
                
                  
                this.setState({jobRowData:_.uniq(keyskillsFiltered)})

                  }  
            }
    }
    getJobrowdata =async()=>{ 
        await axios.get('http://localhost:5000/jobs')
        .then(res => {
          const jobRowData = res.data;
          const dataSourceLocationData= jobRowData.map(item => item.location)
          .filter((value, index, self) => self.indexOf(value) === index)
            const maxRate = Math.max.apply(Math, jobRowData.map(function(o) { return o.rate; }))
           
            const minRate = Math.min.apply(Math, jobRowData.map(function(o) { return o.rate; }))
            
            const maxExp = Math.max.apply(Math, jobRowData.map(function(o) { return o.Exp; }))
           
            const minExp = Math.min.apply(Math, jobRowData.map(function(o) { return o.Exp; }))
            let keyskillsTemp=[]
            jobRowData.forEach(entry => {
                            entry['keyskills'].forEach(data => {
                                keyskillsTemp.push(data)
                            })
                        })
            const keyskills= _.uniq(keyskillsTemp);
            
            this.setState({ jobRowData:jobRowData,
            dataSourceLocation:dataSourceLocationData,
            minRate:minRate,
            maxRate:maxRate,
            minExp:minExp,
            maxExp:maxExp ,
            dataSourcekeySkills:keyskills});
            // console.log(this.state,'state')

        })}
        logout=()=>{
            this.setState({token:null})

        }
    
    componentDidMount(){
        this.getauth()
        this.getJobrowdata()
        
    }
    

    render() {
       
        const children = [this.state.dataSourcekeySkills.map(item=><Option key={item}>{item}</Option>)]
        // console.log(children,'children')
        console.log(store,'token')
        const {jobRowData,token} = this.state; 
        console.log(this.state.token)
        if (!token || token===null){
            <Redirect to='/login' />
        }
        
        
        
        return (
            
            <div style={{backgroundColor:'#f3f2f2'}}>
                <BenchNav/>
               
              <div className='secondblock-bench' style={{width: '100%',minHeight: '90px',backgroundColor: '#353535'}}>
                  <div className='secondblock-bench-margin'>
                  <h1 className="h2-text" style={{fontSize:'30px',color:'white',textAlign:'center'}}>Find &amp; Hire Bench Resources on Contract</h1>
              <p className="p-text" style= {{textAlign:'center',fontSize:'17px',lineHeight: '1.5'}} >Hire &amp; find the best Bench employees or unutilized human resources of other companies on contract. These are the verified          bench resources and existing employees of networked companies and available on contract or temporary for your flexible          and temp hiring needs.</p>


                  </div>
              
              </div>
                <div className='margin-row-div'>

                <Row className='bench-filter-main-row'>
                   <Col className='bench-filter-main' lg={6}sm={24}md={6} xs={24}>
                       {
                          
                           <BenchFilter 
                           dataSourceLocation={this.state.dataSourceLocation}
                            submit={this.submitHandler}
                            clearfilter={this.clearfilter}
                            minRate={this.state.minRate}
                            maxRate={this.state.maxRate}
                            gender={this.GenderSelectchangeHandler}
                            availability={this.AvailSelectchangeHandler}
                            work={this.SelectchangeHandler}
                            location={this.LocationchangeHandler}
                            rate={this.sliderChangeRate}
                            exp={this.sliderChangeExp}

                           />
                           



                       }
                       
                      
                   </Col>


                   <Col className='' lg={18}sm={24}md={18} xs={24}>
                       <Row className='secondBlock-bench'>
                       
                       <Col lg={18}>
                              
                                         <Select mode="tags" value={this.state.keyskills} required style={{ width: '100%' }} size='large' onChange={this.SearchchangeHandler} placeholder="Key Skills" >
                                            {children}
                                        </Select>
                               </Col>
                               <Col  lg={6}>
                               <Form onSubmit={this.searchSubmit} >
                               <button className='submit-bench' type="submit">Search</button>
                               </Form>
                               </Col>

                
                         
                               

                               
                         
                                
                   
                       </Row>
                       <Row>
                           
                             {
                             jobRowData.length < 1 
                             ?
                             <p style={{textAlign:'center'}}>No Data Found</p>
                             :
                             <BenchJobRow  jobRowData={this.state.jobRowDataTemp.length>0?this.state.jobRowDataTemp:
                            this.state.jobRowData} />
                             }
                           
                           
                       </Row>
                    </Col>
                </Row>

                </div>
               
                          
                           

            
            </div>
        )
    }
}
