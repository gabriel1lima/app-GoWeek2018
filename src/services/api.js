import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.2.110:3000'
});

export default api;