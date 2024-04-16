import axios from 'axios';
import BaseURL from "../BaseURL";


const GeneralRequest = axios.create({
    timeout : 300000
});

GeneralRequest.interceptors.request.use(function(config) {
    // const token = sessionStorage.getItem('generalToken');
    config.baseURL = BaseURL();
    return config;
} , function(err) {
    return Promise.reject(err)
})

GeneralRequest.interceptors.response.use(function(response) {
    return response;
},function(err) {
    return Promise.reject(err.response);
})


export default GeneralRequest;
