import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, } from 'reactstrap';
import { Input } from 'antd';
import { Redirect } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined,MailOutlined ,LockFilled  } from '@ant-design/icons';
import '../styles/Register.css'

import axios from 'axios';
const Register = () => {
    const [data,setData]= useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    // const [alert,setalert] =useState(false)
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const [completed,SetCompleted] =useState(false)
    const submitHandler = e=>{
        e.preventDefault();
        e.target.reset();
        axios.post('http://localhost:5000/register',data).then(
            res =>{
             
                setData({
                    username:'',
                    email:'',
                    password:'',
                    confirmpassword:''
                })
                // setalert(true)
            }
            
        )
        SetCompleted(true)
    }
    if(completed){
        <Redirect to='/register'/>
    }
    return (
        <div style={{height:'100%'}}>
             <div className="main-register_body">
                    <div className="main-registerCard">
                        
                        
                    <h4>Register</h4>
                          <Form className="main-registerFormMain"  onSubmit={submitHandler} autocomplete="off">
                            <FormGroup>
                                <Label for="Please Enter USER">Username</Label>
                                <Input placeholder="Username" 
                                 size="large" value={data.username}
                                 onChange={changeHandler}
                                 name='username'
                                 
                                prefix={<UserOutlined className="site-form-item-icon" />}/>
                                <Label for="Please Enter Email">Email</Label>
                                <Input placeholder="Email" 
                                 size="large"  value={data.email}
                                 onChange={changeHandler}
                                 name='email'
                                 
                                prefix={<MailOutlined  className="site-form-item-icon" />}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="userPassword">Password</Label>
                                <Input.Password
                                    placeholder="Password"
                                    size="large" 
                                    onChange={changeHandler}
                                    name='password'
                                    value={data.password}
                                    prefix={<LockFilled className="site-form-item-icon" />}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                <Label for="confirmPassword">Confirm Password</Label>
                                <Input.Password
                                    placeholder="Confirm Password"
                                    size="large" 
                                    onChange={changeHandler}
                                    name='confirmpassword'
                                    value={data.confirmpassword}
                                    prefix={<LockFilled className="site-form-item-icon" />}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                               
                            </FormGroup>
                            <div className="main-registerOptButtons mt-2">
                                
                                <Button color="primary" className="main-registerSubmitButton">Register</Button>
                                <a href="/" className="main-forgotPassword">Exit</a>
                            </div>
                        </Form>
                        </div>
                        </div>
            
            
        </div>
    )
}

export default Register
