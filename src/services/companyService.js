import axios from '../axios'

const getCompanyListApi = () => {
    return axios.get('api/v1/company');
}

export { getCompanyListApi };