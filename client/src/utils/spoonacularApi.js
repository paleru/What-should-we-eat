import axios from 'axios';

const spoonacularApi = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: {
    apiKey: 'c1573df744bd4d0f8e0571ffddef0f5e',
  },
});

export default spoonacularApi;
