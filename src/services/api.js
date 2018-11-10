import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-goweek2018.herokuapp.com'
});

export default api;