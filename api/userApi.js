/* eslint-disable */
import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'admin/users'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`

const token = sessionStorage.getItem('token')
class UserDataService {

    getAllUser() {
        return axios.get(`${INSTRUCTOR_API_URL}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    createUser(data, token) {
        return axios.post(`${INSTRUCTOR_API_URL}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    deActiveUser(id, token) {
        return axios.put(`${INSTRUCTOR_API_URL}/deactivation/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    getUserById(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    getUserFromToken(token) {
        return axios.put(`${API.API_URL}/me`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }
}

export default new UserDataService()