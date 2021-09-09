import axios from 'axios';

const instance = axios.create({
    baseURL        : 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers        : {'API-KEY': '4a92b17f-3163-41f6-abf7-d5dd98a52bbd'}
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    }
};
