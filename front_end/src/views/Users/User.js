import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

import usersData from './UsersData'

class User extends Component {

  constructor(props){
    super(props);
    this.state = { users: [] };
  }


  componentDidMount() {
    axios
      .get(`http://localhost/orchester/backend_api/common/get_row/users/id/${this.props.match.params.id}`)
      .then(result  => {
        this.setState({ users : result.data });
        // alert(1);
        console.log(this.state.users);
        console.log(usersData);
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

    const { users } = this.state;

    const user = this.state.users;
    // const user = usersData.find( user => user.id.toString() === this.props.match.params.id)
    // console.log(this.state.users);
    // console.log(user);

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong>
                  <i className="icon-info pr-1"></i>User idasdasdasdasdasdasd: {this.props.match.params.id}
                </strong>
              </CardHeader>
              <CardBody>
                  <div>
                    asdasdasdasdsadasdsadsadXXXXXXXXXXX
                  </div>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
