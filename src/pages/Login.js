import React,{useState,useContext} from 'react'
import axios from 'axios';
import {store} from '../Routes/CompRouter';
import { Redirect } from 'react-router';
import { Button, Form, FormGroup, Label, } from 'reactstrap';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined,LockFilled  } from '@ant-design/icons';
import '../styles/Login.css'



const Login = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        console.log(token)
       return <Redirect to='/bench' />
    }
    return (
        <div style={{height:'100%'}}>
            
            <div className="login_body">
                    <div className="loginCard">
                        <h3 className='mb-0' style={{textAlign:'center'}}>Login</h3>
            <Form className="loginFormMain"  onSubmit={submitHandler} autocomplete="off">
                            <FormGroup>
                                <Label for="Please Enter USER">Username</Label>
                                <Input placeholder="Username" 
                                 size="large" 
                                 onChange={changeHandler}
                                 name='email'
                                 
                                prefix={<UserOutlined className="site-form-item-icon" />}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="userPassword">Password</Label>
                                <Input.Password
                                    placeholder="Password"
                                    size="large" 
                                    onChange={changeHandler}
                                    name='password'
                                    prefix={<LockFilled className="site-form-item-icon" />}
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                                {/* <Input type="password" name="password" id="userPassword"
                                    placeholder="Please Enter password" /> */}
                            </FormGroup>
                            <div className="loginOptButtons">
                                <a href="/register" className="forgotPassword">Register</a>
                                <Button color="primary" className="loginSubmitButton">Submit</Button>
                            </div>
                        </Form>
                        </div>
                        </div>

        </div>
    )
}

export default Login

