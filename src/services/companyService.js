import axios from '../axios'

const getCompanyListAPi = () => {
    return axios.get('api/v1/company');
}

export { getCompanyListAPi };