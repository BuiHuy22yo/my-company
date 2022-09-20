import axios from '../axios'

const getCompanyList = () => {
    return axios.post('api/v1/login');
}

export { getCompanyList};