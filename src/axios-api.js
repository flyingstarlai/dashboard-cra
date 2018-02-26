import axios from 'axios';
import { loadState } from './shared/utility';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  headers: { authorization: loadState().auth.token },
});

export default instance;
