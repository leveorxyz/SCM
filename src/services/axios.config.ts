import axios from 'axios';

const API_ENDPOINT = 'http://127.0.0.1:5000/api/v1/namespaces/default/apis/SCProtocol/';

const _axios = axios.create({
  baseURL: API_ENDPOINT,
  // withCredentials: true,
});

export default _axios;
