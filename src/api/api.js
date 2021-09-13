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
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    }
};
