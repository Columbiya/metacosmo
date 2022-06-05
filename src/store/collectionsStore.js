import { makeAutoObservable } from 'mobx'
import { authAxios, axios } from './../http/http';

class CollectionsStore {
    _collections = []
    _page = 1
    _limit = 10
    _count = 0

    constructor() {
        makeAutoObservable(this)
    }
    
    get collections() {
        return this._collections
    }

    set collections(value) {
        this._collections = value
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

    async getCollections(page, limit) {
        const response = await axios.get(`/collections?limit=${limit || this._limit}&page=${page || this._page}`)
        const data = response.data
        this.collections = data.rows
        this.count = data.count

        return data.rows
    }


    async createCollection(data) {
        try {
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('order', data.order)
            formData.append('description', data.description)
            formData.append('link', data.link)
            formData.append('hider', data.hider)
            formData.append('img', data.img[0])
    
            const response = await authAxios.post('/collections', formData, {
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

    async getOneCollection(id) {
        const response = await axios.get('/collections/' + id)
        this.selectedArticle = response.data
    }

    async removeCollection(id) {
        const response = await authAxios.delete('/collections', {data: {id}})
        return response.data
    }

    async changeOrder(id, order) {
        const response = await authAxios.post('/collections/change', {id, order})
        return response.data
    }
}

export default new CollectionsStore()