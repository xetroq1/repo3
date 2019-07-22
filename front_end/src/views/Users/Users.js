import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

import usersData from './UsersData';

function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td><Link to={userLink}>{user.username}</Link></td>
      {// <td>{user.registered}</td>
    }
      <td>{user.user_type}</td>
      {// <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    }
    </tr>
  )
}

class Users extends Component {
  constructor(props){
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost/orchester/backend_api/common/get_users")
      .then(result  => {
        this.setState({ users : result.data });
        // alert(1);
        console.log(usersData);
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
    // console.log('asdasd')
    const { users } = this.state;
    let userList = [];
    if (this.state.users) {
      userList = users.filter((user) => user.id < 10)
    }else{
      userList = usersData.filter((user) => user.id < 10)
    }

    console.log(userList);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <h1>
                sadasdsa
                </h1>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">username</th>
                      {// <th scope="col">registered</th>
                    }
                      <th scope="col">user_type</th>
                      {// <th scope="col">status</th>
                    }
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
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

export default Users;
