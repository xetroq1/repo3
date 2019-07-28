import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios';

import usersData from './UsersData';

function UserRow(props) {
  const task = props.task
  const userLink = `/users/${task.task_id}`
  const addTask = `/task/add/${task.task_id}`

  // const getBadge = (status) => {
  //   return status === 'Active' ? 'success' :
  //     status === 'Inactive' ? 'secondary' :
  //       status === 'Pending' ? 'warning' :
  //         status === 'Banned' ? 'danger' :
  //           'primary'
  // }

  return (
    <tr key={task.task_id.toString()}>
      <th scope="row">{task.title}</th>
      <td>{task.description}</td>
      {// <td>{user.registered}</td>
      }
      <td><Link to={userLink}>View User :{task.assigned_to}</Link></td>
      {// <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
      }
      <td>
        Actions
        {// <Link to={addTask}>Add Task</Link>
      }
      </td>
    </tr>
  )
}

class Tasks extends Component {
  constructor(props){
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost/orchester/backend_api/common/get_data?table=tasks")
      .then(result  => {
        console.log(result);
        this.setState({ tasks : result.data });
        // alert(1);
        // console.log(result);
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
    const { tasks } = this.state;
    let userList = [];
    if (this.state.tasks) {
      userList = tasks.filter((task) => task.task_id < 10)
    }else{
      userList = usersData.filter((task) => task.task_id < 10)
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
                All Tasks
                </h1>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Task Title</th>
                      {// <th scope="col">registered</th>
                    }
                      <th scope="col">Description</th>
                      <th scope="col">ID of Assigned</th>
                      {// <th scope="col">status</th>
                    }
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((task, index) =>
                      <UserRow key={index} task={task}/>
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

export default Tasks;
