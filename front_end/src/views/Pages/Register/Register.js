import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import  { Redirect } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
constructor( props ){
    super( props );
    this.state = {
        'username'  : '',
        'email'     : '',
        'firstname' : '',
        'lastname'  : '',
        'password'  : '',
        'rpassword' : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
}

handleSubmit (event){
    const input_fields   =  {
        username   :   this.state.username,
        password  :   this.state.password,
    };
    event.preventDefault();
    this.onformSubmit(input_fields)
   this.setState(this.state);
};

onformSubmit = (data) => {
    this.setState(this.state);
    var self            = this;
    const insert_url    = 'http://localhost/orchester/backend_api/login/register';
    const bodyFormData  =  new FormData();
    for(var i  = 0; i  < Object.keys(data).length; i++){
        bodyFormData.append(Object.keys(data)[i],this.state[Object.keys(data)[i]]);
    }
    axios({
            method : 'post',
            url    :  insert_url,
            data   : bodyFormData,
            config : { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(
            (result) =>
            {
                this.setState({data : result.data.return, response : result.data})
                if(result.data.response_status){
                    window.location.reload();
                }
            }
        )
        .catch(function (result){
            console.log(result);
        });
}
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    </InputGroup>
                    <Row>
                      <Col xs="12" sm="6">
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><i className="icon-user"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Firstname" autoComplete="name" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                          </InputGroup>
                      </Col>
                      <Col xs="12" sm="6">
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText><i className="icon-user"></i></InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" placeholder="Lastname" autoComplete="name" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                      </InputGroup>
                      </Col>
                    </Row>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" name="rpassword" value={this.state.rpassword} onChange={this.handleChange}/>
                    </InputGroup>
                    <Button type="submit" color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="12">
                      <Button className="btn-facebook mb-1" block><span>Login</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
