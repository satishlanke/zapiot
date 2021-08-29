import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, } from 'reactstrap';
import { Input, Row,Col,Select } from 'antd';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import { UserOutlined,MailOutlined   } from '@ant-design/icons';
import '../styles/ApplyBench.css'

const {Option} = Select;
const children = [];


export default class ApplyBench extends Component {
    constructor(props){
        super(props);
        this.state={
            personName:'',
            designation:'',
            email:'',
               category:'',
               location:'',
                   rate:'',
                    Exp:'',
                   work:'Select',
            availability:'Select',
             activeDate:'',
              keyskills:'',
              personImage:'',
              gender:'Select',
              ug:'',
              ugGrade:'',
              pg:'',
              pgGrade:''
        }
        this.uploadImage= async(files)=>{
            // console.log(files[0])
            const formData = new FormData()
            
            formData.append("file",files)
            formData.append("upload_preset","uw4mkxvg")
            try{
                await axios.post("https://api.cloudinary.com/v1_1/satishlanke/image/upload",formData)
            .then((response)=>{
                // console.log(response.data.secure_url)
                this.setState({personImage:response.data.secure_url})
                console.log(this.state.personImage)
                console.log("i am first");
            });

            }
            catch(error){
                console.log(error)
            }

            
        }
       
        this.changeHandler = e =>{
            console.log(this.state)
            this.setState(
                {...this.state,[e.target.name]:e.target.value}

            )
            
        }
        this.SelectchangeHandler =(value)=>{
            console.log(this.state)
            this.setState(
                {...this.state,work:value}

            )

        }
        this.GenderSelectchangeHandler =(value)=>{
            console.log(this.state)
            this.setState(
                {...this.state,gender:value}

            )

        }
        this.AvailSelectchangeHandler =(value)=>{
            console.log(this.state)
            this.setState(
                {...this.state,availability:value}

            )

        }
        this.taghandleChange =(value)=>{
            console.log(this.state)
            this.setState(
                {
                    ...this.state,keyskills:value
                }
            )
        }
        this.submitHandler = async(e)=>{
            e.preventDefault();
            // (async () => {
            //     await this.uploadImage();
               
            // })();
           
            try{
                await axios.post('http://localhost:5000/jobs',this.state).then(
            res =>{
                // alert(res.data)
                console.log(res,"data")
                
            })
            }
            catch(err){
                console.log(err)
            }
      
            
           
            this.setState({
                personName:'',
            designation:'',
            email:'',
               category:'',
               location:'',
                   rate:'',
                    Exp:'',
                   work:'',
            availability:'',
             activeDate:'',
              keyskills:'',
            gender:'',
            ug:'',
            ugGrade:'',
            pg:'',
            pgGrade:''})
            
            
        }
        
    }
    render() {
        return (
            <div className='registerjob' style={{width:'100%',height:'100%'}}>
                <div className='registerbody'>
                
                                 
                <Form className="registerFormMain"  onSubmit={this.submitHandler} autocomplete="off">
                            <FormGroup>
                                <Row className='register-form-row'>
                                    <Col span={24} className='registerjob-col'>
                                    <Label  className='register-label' for="Please Enter USER">Username</Label>
                                    <Input placeholder="Name" style={{width:'100%'}}
                                    size="large" required value={this.state.personName}
                                    pattern="[a-zA-Z'-'\s]*"
                                    onChange={this.changeHandler}
                                    name='personName'
                                    
                                    prefix={<UserOutlined className="site-form-item-icon" />}/>
                                    </Col>
                                </Row>
                                <Row>
                                <Col span={24} className='registerjob-col'>
                                    <Label className='register-label' for="Please Enter Email">Email</Label>
                                    <Input placeholder="Email" 
                                    size="large"  value={this.state.email}
                                    onChange={this.changeHandler}
                                    name='email'
                                    
                                    prefix={<MailOutlined  className="site-form-item-icon" />}/>
                                    </Col>
                                </Row>
            
                                   
                                       <Row style={{marginTop:'1em'}}>
                                           <Col>
                                           <div>
                                        <input type='file' name='personImage'  onChange={(event)=>
                                            {
                                                this.uploadImage(event.target.files[0])
                                            }}/>
                                        </div>
                                           </Col>
                                           <Col>
                                           <Label className='register-label' for="">Gender</Label>
                                    <Select defaultValue={this.state.gender} required  name='gender' onChange={this.GenderSelectchangeHandler} >
                                    <Option value="Select">Select</Option>
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                    {/* <Option value="Any" >Any </Option> */}
                                    
                                    </Select>
                                           </Col>
                                       </Row>
                                    
                               
                                
                                
                                
                            </FormGroup>
                            <FormGroup>
                            <Row className='register-form-row'>
                                    <Col className='registerjob-col'>
                                    <Label className='register-label' for="designation">Designation</Label>
                                    <Input placeholder="Designation" 
                                    size="large" required value={this.state.designation}
                                    pattern="[a-zA-Z'-'\s]*"
                                    onChange={this.changeHandler}
                                    name='designation'
                                    
                                    />
                                    </Col>
                                    <Col className='registerjob-col'>
                                    <Label className='register-label' >Category</Label>
                                    <Input placeholder="Category" value={this.state.category}
                                    pattern="[a-zA-Z'-'\s]*"
                                    size="large" 
                                    onChange={this.changeHandler}
                                    name='category'
                                    
                                    />
                                    </Col>
                                    <Col className='registerjob-col'>
                                    <Label className='register-label' for="">Location</Label>
                                    <Input placeholder="Location/City" value={this.state.location}
                                    size="large" required
                                    pattern="[a-zA-Z'-'\s]*"
                                    onChange={this.changeHandler}
                                    name='location'
                                    
                                    />
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                            <Row className='register-form-row'>
                                    <Col lg={7} className='registerjob-col'>
                                    <Label className='register-label' for="">Rate(Hourly)</Label>
                                    <Input  type='number'placeholder="Rate" 
                                    size="large" required value={this.state.rate}
                                    
                                    onChange={this.changeHandler}
                                    name='rate'
                                    
                                    />
                                    </Col>
                                    <Col lg={7} className='registerjob-col'>
                                    <Label className='register-label' >Experience(Years)</Label>
                                    <Input placeholder="Experience" type='number'
                                    value={this.state.Exp}
                                    size="large" required
                                    onChange={this.changeHandler}
                                    name='Exp'
                                    
                                    />
                                    </Col>
                                    
                                    <Col  lg={7} className='registerjob-col select-col'>
                                    <Label className='register-label' >Availability</Label>
                                    <Select defaultValue={this.state.availability} required size='large' name='availability' onChange={this.AvailSelectchangeHandler} >
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
                            </FormGroup>
                            <FormGroup>
                            <Row className='register-form-row'>
                                    <Col className='registerjob-col'lg={7} >
                                    <Label className='register-label' for="">Active Date</Label>
                                    <Input placeholder="activeDtae"
                                    size="large" required type='date'
                                    onChange={this.changeHandler}
                                    name='activeDate'
                                    />
                                    </Col>
                                    <Col className='registerjob-col' lg={7}>
                                        <Label className='register-label'>Key Skills</Label>
                                        <Select mode="tags"  required style={{ width: '100%' }} size='large' onChange={this.taghandleChange} placeholder="Key Skills" >
                                            {children}
                                        </Select>
                                    </Col>
                               
                                    <Col className='registerjob-col' className='select-col' lg={7}>
                                    <Label className='register-label' for="">Work From</Label>
                                    <Select defaultValue={this.state.work} required size='large' name='work' onChange={this.SelectchangeHandler} >
                                    <Option value="Select">Select</Option>
                                    <Option value="Offsite">Offsite</Option>
                                    <Option value="Onsite">Onsite</Option>
                                    <Option value="Any" >Any </Option>
                                    
                                    </Select>
                                    </Col>
                                    
                                    
                                </Row>
                                <div className='mt-3'><h5>EDUCATION</h5></div>
                                <Row>
                                    
                                   
                                    <Col>
                                    
                                    <Label  className='register-label' for="">Under Graduation</Label>
                                    <Input placeholder="UG" 
                                    size="large" required value={this.state.ug}
                                   
                                    onChange={this.changeHandler}
                                    name='ug'
                                    
                                   />
                                    </Col>
                                    <Col>
                                    <Label  className='register-label' for="">Grade</Label>
                                    <Input placeholder="Grade" 
                                    size="large" required value={this.state.ugGrade}
                                   
                                    onChange={this.changeHandler}
                                    name='ugGrade'
                                    
                                   />
                                    </Col>
                                </Row>
                                <Row>
                                    
                                   
                                    <Col>
                                    
                                    <Label  className='register-label' for="">Post Graduation</Label>
                                    <Input placeholder="PG" 
                                    size="large" required value={this.state.pg}
                                   
                                    onChange={this.changeHandler}
                                    name='pg'
                                    
                                   />
                                    </Col>
                                    <Col>
                                    <Label  className='register-label' for="">Grade</Label>
                                    <Input placeholder="Grade" 
                                    size="large" required value={this.state.pgGrade}
                                   
                                    onChange={this.changeHandler}
                                    name='pgGrade'
                                    
                                   />
                                    </Col>
                                </Row>
                            </FormGroup>
                           
                            
                            <div className="registerOptButtons mt-2">
                                
                                <Button color="primary" className="registerSubmitButton">Register</Button>
                                <a href="/" className="forgotPassword">Exit</a>
                            </div>
                        </Form>

                </div>
                
            </div>
        )
    }
}
