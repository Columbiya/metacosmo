import { makeAutoObservable } from 'mobx'
import { authAxios, axios } from './../http/http';

class PartnersStore {
    _partners = []

    constructor() {
        makeAutoObservable(this)
    }

    get partners() {
        return this._partners
    }

    set partners(value) {
        this._partners = value
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

    async getPartners() {
        const response = await axios.get(`/partners`)
        const data = response.data
        this.partners = data

        return data
    }

    async createPartner(data) {
        try {
            const formData = new FormData()
            formData.append('link', data.link)
            formData.append('img', data.img[0])
    
            const response = await authAxios.post('/partners', formData, {
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

    async removePartner(id) {
        const response = await authAxios.delete('/partners', {data: {id}})
        return response.data
    }
}

export default new PartnersStore()