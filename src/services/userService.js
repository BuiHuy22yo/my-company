import axios from '../axios'

const handleLoginApi = (account, password) => {
    return axios.post('api/v1/login', { user_id: account,
        password, });
}

export { handleLoginApi };