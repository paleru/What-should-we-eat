import axios from 'axios';

//axios baseURL
const baseAxiosFetch = axios.create({
  baseURL: '/api/v1',
});

export default baseAxiosFetch;
