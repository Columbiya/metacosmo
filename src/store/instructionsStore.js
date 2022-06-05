import { makeAutoObservable } from 'mobx'
import { authAxios, axios } from './../http/http';

class InstructionsStore {
    _instructions = []
    _page = 1
    _limit = 10
    _count = 0

    constructor() {
        makeAutoObservable(this)
    }
    
    get instructions() {
        return this._instructions
    }

    set instructions(value) {
        this._instructions = value
    }

    get page() {
        return this._page
    }

    set page(value) {
        this._page = value
    }

    get limit() {
        return this._limit
    }

    set limit(value) {
        this._limit = value
    }
    
    get count() {
        return this._count
    }

    set count(value) {
        this._count = value
    }

    async getInstructions(page, limit) {
        const response = await axios.get(`/instructions?limit=${limit || this._limit}&page=${page || this._page}`)
        const data = response.data
        this.instructions = data.rows
        this.count = data.count

        return data.rows
    }


    async createInstructions(data) {
        try {
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('order', data.order)
            formData.append('description', data.description)
            formData.append('link', data.link)
            formData.append('hider', data.hider)
            formData.append('img', data.img[0])
    
            const response = await authAxios.post('/instructions', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            return response.data
        } catch(e) {
            console.log(e)
        }
    }

    async removeCollection(id) {
        const response = await authAxios.delete('/instructions', {data: {id}})
        return response.data
    }
}

export default new InstructionsStore()