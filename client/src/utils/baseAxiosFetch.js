import axios from 'axios';

const baseAxiosFetch = axios.create({
  baseURL: '/api/v1',
});

export default baseAxiosFetch;
