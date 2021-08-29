import React, { Component } from 'react'
// import BenchAutocomplete from './BenchAutocomplete'
import {  Button, Form, FormGroup, Label,Input } from 'reactstrap';
import { Row,Col ,Slider,Select} from 'antd'
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';


const {Option} = Select;


export default class BenchFilter extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSourceLocation: props.dataSourceLocation,
            gender:'Select',
            availability:'Select',
            work:'Select'
            
        }
        // console.log(this.state.dataSourceLocation,"datasouce-Typeahead")
        
    }
    
    render() {
        return (
            <div>
                <div className='bench-filter-block'>
                       <Form onSubmit={this.props.submit} style={{backgroundColor:'#00aade' ,padding: '2em'}}>
                        <h2  style={{color:'white',fontSize:'20px'}}>BENCH RESOURCES</h2>
                            <Row className='mb-2' >
                               <Col lg={24}>


                               <FormGroup>
                                    <Label  for="">Locality(city)</Label>
                                    <Typeahead
                                        required
                                        id='type-location'
                                        labelKey="location"
                                       
                                        onChange={this.props.location}
                                        options={this.props.dataSourceLocation}
                                        selected={this.state.selected}
                                        />
                                </FormGroup>
                               </Col>
                                
                               
                                
                            </Row>
                            <Row className='mb-2' >
                            <Col lg={24}>


                                <FormGroup>
                                    <Label  for="">Country</Label>
                                    <Typeahead
                                     id='type-country'
                                        onChange={(selected) => {
                                            this.setState({selected});
                                        }}
                                        options={this.state.dataSourceLocation}
                                        selected={this.state.selected}
                                        />
                                </FormGroup>
                                </Col>
                              
                               
                           </Row>
                            <Row>
                            <Col lg={24}>
                                
                                    <Label for="examplePassword">Exp(Min-Max)</Label>
                                   
                                    <Slider style={{width:'100%'}} min={0} max={this.props.maxExp}range
                                    onChange={(e)=>console.log(e)} 
                                     defaultValue={[this.props.minExp, this.props.maxExp]} />

                              
                                </Col>
                            </Row>
                            <Row>
                            <Col lg={24}>
                                
                                    <Label for="examplePassword">Gender</Label>
                                    <Select defaultValue={this.state.gender} required style={{width:'100%'}} name='gender' onChange={this.props.gender} >
                                    <Option value="Select">Select</Option>
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                    {/* <Option value="Any" >Any </Option> */}
                                    
                                    </Select>
                              
                                </Col>
                            </Row>
                            <Row>
                            <Col lg={24}>
                                
                                    <Label for="examplePassword">Work From</Label>
                                    <Select defaultValue={this.state.work} required  name='work'style={{width:'100%'}} onChange={this.props.work} >
                                    <Option value="Select">Select</Option>
                                    <Option value="Offsite">Offsite</Option>
                                    <Option value="Onsite">Onsite</Option>
                                    <Option value="Any" >Any </Option>
                                    
                                    </Select>
                              
                                </Col>
                            </Row>
                            <Row>
                            <Col lg={24}>
                                
                                    <Label for="examplePassword">Availability</Label>
                                    <Select defaultValue={this.state.availability} required  name='availability'style={{width:'100%'}} onChange={this.props.availability } >
                                    <Option value="Select">Select</Option>
                                    <Option value="Immediate">Immediate</Option>
                                    <Option value="1 Week">1 Week</Option>
                                    <Option value="2 Week" >2 Week </Option>
                                    <Option value="3 Week" >3 Week </Option>
                                    <Option value="1 Month" >1 Month </Option>
                                    <Option value="More than 1 Month" >More than 1 Month </Option>
                                    
                                    </Select>
                              
                                </Col>
                            </Row>
                           
                           
                               
                          
                           <Row>
                            <Col lg={24}>
                                
                                    <Label for="examplePassword">Rate(Min/Max)</Label>
                                    <Slider style={{width:'100%'}} 
                                    min={0} max={this.props.maxRate} range 
                                   
                                    onChange={this.props.rate} 
                                    defaultValue={[this.props.minRate, this.props.maxRate]} />
                              
                                </Col>
                            </Row>
                            <div>
                            <Button type='submit' style={{borderRadius:'0px',color:'white',fontWeight:'500',marginRight:'.5em'}} className='btn btn-warning'>Search</Button>
                            <Button onClick={this.props.clearfilter} style={{borderRadius:'0px',color:'white',fontWeight:'500'}} className='btn btn-outline'>clear filter</Button>

                            </div>
                            
                            </Form>
                       </div>

            </div>
        )
    }
}
