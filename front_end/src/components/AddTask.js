import React, { Component } from 'react';
import axios from 'axios';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class AddTask extends Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    // this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      formData: {}
    };
    this.updateState = this.updateState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // toggle() {
  //   this.setState({ collapse: !this.state.collapse });
  // }

  // toggleFade() {
  //   this.setState((prevState) => { return { fadeIn: !prevState }});
  // }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    console.log(this.state.formData);
    this.submitTast(this.state.formData)
  }

  updateState(e) {
    // console.log(e.target);
    // this.setState({
    //   formData:{
    //     [e.target.name]: e.target.value
    //   }
    //  });
    this.state.formData[e.target.name] = e.target.value;
    // this.setState({
    //   formData:{
    //     [e.target.name]: e.target.value
    //   }
    //  });
    // console.log(this.state);
  }

  submitTast = (param) => {
    console.log(param);
    var self            = this;
    const insert_url    = 'http://localhost/orchester/backend_api/common/add_data/tasks';
    const bodyFormData  =  new FormData();
    for(var i  = 0; i  < Object.keys(param).length; i++){
        bodyFormData.append(Object.keys(param)[i],param[Object.keys(param)[i]]);
    }
    bodyFormData.append('assigned_to', `${this.props.match.params.toId}`);
      console.log(bodyFormData);

    axios({
          method : 'post',
          url    :  insert_url,
          data   : bodyFormData,
          config : { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(
          (result) =>
          {
            console.log(result);
              // this.setState({data : result.data.return, response : result.data})
              // if(result.data.response_status){
                  // this.setStorage()
                  // window.location.reload();
              // }
          }
      )
      .catch(function (result){
          console.log(result);
      });
  }


  render() {
    // const { handleSubmit, pristine, reset, submitting } = props

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Company</strong>
                <small> Form</small>
              </CardHeader>
              <CardBody>
                <form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="company">Title</Label>
                    <Input type="text" name="title" placeholder="Enter your company name" onChange = {this.updateState} value = { this.state.title }/>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="street">Description</Label>
                    <Input type="text" name="description" placeholder="Enter street name" onChange = {this.updateState} value = { this.state.description }/>
                  </FormGroup>
                  <div className="form-actions">
                    <Button type="submit" color="primary">Submit</Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddTask;
