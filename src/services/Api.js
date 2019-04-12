import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-jp-backend.herokuapp.com",
});

export default api;