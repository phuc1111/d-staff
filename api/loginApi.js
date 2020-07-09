import axios from 'axios'
import API from './util'

const INSTRUCTOR = 'login'
const INSTRUCTOR_API_URL = `${API.API_URL}/${INSTRUCTOR}`

class LoginDataService {
    login(data) {
        return axios.post(`${INSTRUCTOR_API_URL}`, data);
    }
}

export default new LoginDataService()