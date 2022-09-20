// api/axiosClient.js
import axios from "axios";
import queryString from 'query-string';

// Set up default config for http request here

const  axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'content-type' : 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params)
});


axiosClient.interceptors.request.use(async (config) => {
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data){
        return response.data
    }

    return  response;
},(error => {
    // handle error
    throw error;
}))

export default axiosClient;