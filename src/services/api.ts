import axios from 'axios';

// * Creating an instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
});

export default instance;
