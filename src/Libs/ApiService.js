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

    async fetchListOfTodos() {
        const response = await this.api.get('/api')
        return await response.data
    }

    async createNewTodo(todo) {
        const response = await this.api.post('/api', todo);
        return await response.data
    }

    async deleteTodo(todo) {
        const response = await this.api.delete(todo.url);
        return await response.data
    }

    async editTodo(title, todo) {
        const response = await this.api.patch(todo.url, { title });
        return await response.data
    }

}

export default new ApiService()