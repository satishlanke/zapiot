import React, { Component } from 'react'
import { Row, Col } from 'antd';
import {  Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CareerForm extends Component {
    render() {
        return (
            <div  style={{marginBottom:'2em',padding:'2em'}}>
                <Form style={{backgroundColor:'#4E407B' ,padding: '2em'}}>
                    <h2 style={{color:'white'}}>send CV</h2>
                            <Row className='mb-2' form>
                                <Col md={12}   >
                                <FormGroup className='career-formgroup'>
                                    <Label  for="exampleEmail">First Name</Label>
                                    <Input className='footer-form-input'    type="text" name="fname" id="exampleEmail" />
                                </FormGroup>
                                </Col>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="examplePassword">Last Name</Label>
                                    <Input className='footer-form-input' type="text" name="phn" id="examplePassword"  />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row className='mb-2' form>
                                <Col md={12}   >
                                <FormGroup className='career-formgroup'>
                                    <Label  for="exampleEmail">Phone Number</Label>
                                    <Input className='footer-form-input'    type="text" name="fname" id="exampleEmail" />
                                </FormGroup>
                                </Col>
                                <Col md={12}>
                                <FormGroup>
                                    <Label for="examplePassword">Email</Label>
                                    <Input className='footer-form-input' type="text" name="phn" id="examplePassword"  />
                                </FormGroup>
                                </Col>
                            </Row>
                            
                            <FormGroup className='mb-2'>
                                <Label for="exampleAddress2">Message</Label>
                                <Input className='footer-form-input' type="textarea" name="" id="exampleAddress2" placeholder=""/>
                            </FormGroup>
                            <FormGroup className='mb-2'>
                                
                                <Input className='footer-form-input' type="file" name="" id="exampleAddress2" placeholder=""/>
                            </FormGroup>
                            <FormGroup className='mb-2' >
                                <Label for="exampleAddress">Email</Label>
                                <Input className='footer-form-input' type="text" name="address" id="" placeholder=""/>
                            </FormGroup>
                            {/* <Row className='mb-2' form>
                                <Col md={6}>
                                <Formcapicha/>
                                </Col>
                            </Row>
                            <FormGroup check>
                                <Input className='footer-form-input' type="checkbox" name="check" id="exampleCheck"/>
                                <Label for="exampleCheck" check>Check me out</Label>
                            </FormGroup> */}
                            <Button style={{borderRadius:'0px',color:'white',fontWeight:'500'}} className='btn btn-warning'>SEND CV</Button>
                            </Form>
            </div>
        )
    }
}
