import axios from 'axios';

const instance = axios.create({
    baseURL:'https://hoory-mern-app.web.app'
});

export default instance;