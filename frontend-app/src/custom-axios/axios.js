import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_HOST_ENV,
    // baseURL: `http://localhost:8080/`,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }

})

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);
export default instance
