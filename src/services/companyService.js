import axios from '../axios'

const getCompanyListAPi = () => {
    return axios.get('api/v1/company');
}

const handleCompanyCreate = (form_data) => {
    let url = `api/v1/company/create`
    return axios.post(url,form_data);
}

const handleCompanyUpdate = () => {
    let url = `api/v1/company/update`
    return axios.post(url);
}

const handleCompanyDeleteApi = (id) => {
    let url =`api/v1/company/delete/${id}`
    return axios.post(url);
}

const getCompanyDetailAPi = (id) => {
    let url =`api/v1/company/detail/${id}`
    return axios.get(url);
}

export { getCompanyListAPi, handleCompanyDeleteApi, getCompanyDetailAPi, handleCompanyUpdate, handleCompanyCreate};