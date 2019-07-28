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
    console.log(this.state);
    event.preventDefault();
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

  submitTast = () => {
    axios
      .get("http://localhost/orchester/backend_api/common/get_users")
      .then(result  => {
        this.setState({ users : result.data });
        // alert(1);
        // console.log(usersData);
        // console.log(result.data);
        // console.log(this.state.users);
        // this.setState({users: result.data});
        // usersData = result.data;
      })
      .catch(error => {
        alert("connection error");
        // console.log('herrorr');
        this.setState({ error, isLoading: false })
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
