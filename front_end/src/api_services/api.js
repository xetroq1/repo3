import axios from 'axios';

// const test = true;
let baseurl = 'http://localhost/orchester/backend_api/'; // test server
// let baseurl = 'http://192.168.1.81/jnsapi/api/'; // test server
// if (test === false) {
//   baseurl = 'http://jns.web2.ph/api/api/'; // live server
// }

export default axios.create({
  baseURL: baseurl,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});
