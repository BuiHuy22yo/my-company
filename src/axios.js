import axios from 'axios';
import _ from 'lodash';
// import config from './config';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
        signature: '{"ct":"XM01YLG3rA3Ufak4tsbHIpFHy9wwue2KqwBv+QEl9zE=","iv":"8150f6a6bf5fcebc3d35431853daa897","s":"262b2909f508d43b"}',
    },
    // withCredentials: true
});



instance.interceptors.response.use(
    (response) => {

        const { data } = response;
        return response.data;
    })


export default instance;
