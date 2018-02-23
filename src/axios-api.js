import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { authorization: localStorage.getItem('token')}
})

export default instance;
