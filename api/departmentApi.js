/* eslint-disable */
import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'admin/departments'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`
const token = sessionStorage.getItem('token')

class DepartmentDataService {

    getAllDepart() {
        return axios.get(`${INSTRUCTOR_API_URL}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    createDepart(data) {
        return axios.post(`${INSTRUCTOR_API_URL}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    deActiveDepart(id, data) {
        console.log(token)
        return axios.put(`${INSTRUCTOR_API_URL}/deactivation/${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    updateDepart(id, data) {

        return axios.put(`${INSTRUCTOR_API_URL}/${id}`, data, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }

    getDepartFromId(id) {
        return axios.get(`${INSTRUCTOR_API_URL}/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    }


}

export default new DepartmentDataService()