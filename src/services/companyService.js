import axios from '../axios'

const companyList = () => {
    return axios.post('api/v1/login');
}

export { companyList };