import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import  { Redirect, withRouter, Route } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
constructor( props ){
    super( props );
    this.state={
      username:'',
      visible : true,
      password:'',
      redirect: false,
      data    : [],
      response:[],
    }

    this.handleChange = this.handleChange.bind(this);
    this.onformSubmit = this.onformSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
}

 setStorage(){
    this.state.data.map(
        (key) =>
        this.setUser(key.id,key.username,key.user_type)
    );
}

setUser(id,uname,utype){
    localStorage.setItem('user_id',id)
    localStorage.setItem('username',uname)
    localStorage.setItem('usertype',utype)
}

handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
}

onDismiss(){
    this.setState({visible:false, response : {response_status: ''}});
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
    const insert_url    = 'http://localhost/orchester/backend_api/login/login';
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
                console.log(this.state.data);
                console.log(this.state.response);
                if(result.data.response_status){
                    this.setStorage()
                    window.location.reload();
                }
            }
        )
        .catch(function (result){
            console.log(result);
        });
}




render() {
    const data   =  {
        data   :   this.state.data,
    };
    if("user_id" in localStorage){
       return <Redirect to="/dashboard" data={data}/>;
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
            {this.state.response.response_status === false && <Col xs="12"><Alert className="col-md-12" color="danger"  toggle={this.onDismiss}> {this.state.response.message}</Alert></Col>}
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" name="username" placeholder="Username" autoComplete="username" value={this.state.username} onChange={this.handleChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          {
                              //<Button color="link" className="px-0">Forgot password?</Button>
                          }
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Click below to register.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
