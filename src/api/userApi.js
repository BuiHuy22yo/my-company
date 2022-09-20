import StorageKeys from "../constants/storage-keys";
import axiosClient from "./axiosClient";

const userApi = {
    register(data) {
        const url = 'register/';
        return axiosClient.post(url, data);
    },
    login(data) {
        const url = '/api/token/';
        return axiosClient.post(url, data);
    },

    async getUser(params) {
        const newParams = { ...params }
        const accessToken = localStorage.getItem(StorageKeys.access)
        const url = `users/`;
        return await axiosClient.get(url, {
            params: {...newParams},
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },
    async getProfile(params) {
        const newParams = { ...params }
        const accessToken = localStorage.getItem(StorageKeys.access)
        return await axiosClient.get(`/detail/`, {
            params: {...newParams},
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
    },
}

export default userApi
