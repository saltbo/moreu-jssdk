import axios from "axios";
import { Notification } from 'element-ui';

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response.data;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    if (error.response) {
        Notification.error(error.response.data.msg)
    }

    return Promise.reject(error);
});

let moreu = {
    signup(body) {
        return axios.post('/api/moreu/users', body)
    },
    activate(email, token) {
        let body = { token: token, activated: true };
        return axios.patch(`/api/moreu/users/${email}`, body)
    },
    passwordReset(email, token, newpwd) {
        let body = { token: token, password: newpwd };
        return axios.patch(`/api/moreu/users/${email}`, body)
    },
    applyPasswordReset(email) {
        let body = { email: email };
        return axios.post('/api/moreu/tokens', body)
    },
    signin(body) {
        return axios.post('/api/moreu/tokens', body)
    },
    signout() {
        return axios.delete('/api/moreu/tokens')
    },
    profile() {
        return axios.get('/api/moreu/user')
    },
    find(username) {
        return axios.get(`/api/moreu/users/${username}`)
    },
}

export default moreu;
