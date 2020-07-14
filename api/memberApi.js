/* eslint-disable */
import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'admin/members'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`

const token = sessionStorage.getItem('token')
class UserDataService {

    updateUser(id, data) {
        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

}

export default new UserDataService()