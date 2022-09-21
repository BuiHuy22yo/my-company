import axios from '../axios'

const getCompanyListAPi = () => {
    return axios.get('api/v1/company');
}

const handleCompanyDeleteApi = (id) => {
    let url =`api/v1/company/${id}`
    return axios.post(url);
}

const getCompanyDetailAPi = (id) => {
    let url =`api/v1/company/${id}`
    return axios.post(url);
}

export { getCompanyListAPi, handleCompanyDeleteApi, getCompanyDetailAPi};