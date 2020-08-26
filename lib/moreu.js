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
        return axios.post('/moreu/api/users', body)
    },
    activate(email, token) {
        let body = { token: token, activated: true };
        return axios.patch(`/moreu/api/users/${email}`, body)
    },
    passwordReset(email, token, newpwd) {
        let body = { token: token, password: newpwd };
        return axios.patch(`/moreu/api/users/${email}`, body)
    },
    applyPasswordReset(email) {
        let body = { email: email };
        return axios.post('/moreu/api/tokens', body)
    },
    signin(body) {
        return axios.post('/moreu/api/tokens', body)
    },
    signout() {
        return axios.delete('/moreu/api/tokens')
    },
    profile() {
        return axios.get('/moreu/api/user')
    },
    find(username) {
        return axios.get(`/moreu/api/users/${username}`)
    },
}

export default moreu;
