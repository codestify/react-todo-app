import axios from 'axios'

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://todo-backend-laravel.herokuapp.com",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

    async fetchListOfTodos(endpoint) {
        const response = await this.api.get(endpoint)
        return await response.data
    }

}

export default new ApiService()