import { makeAutoObservable } from 'mobx'
import { authAxios, axios } from './../http/http';

class ArticlesStore {
    _articles = []
    _page = 1
    _limit = 16
    _count = 0
    _selectedArticle = {}

    constructor() {
        makeAutoObservable(this)
    }
    
    get articles() {
        return this._articles
    }

    set articles(value) {
        this._articles = value
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

    get selectedArticle() {
        return this._selectedArticle
    }

    set selectedArticle(value) {
        this._selectedArticle = value
    }

    async getArticles() {
        const response = await axios.get(`/articles?limit=${this._limit}&page=${this._page}`)
        const data = response.data
        this.articles = data.rows
        this.count = data.count

        return data.rows
    }

    async createArticle(data) {
        const payload = {
            "title": data.title,
            "quote": data.quote,
            "boldText": data.boldText,
            "text": data.text,
            "twoColumnContentFirst": data.twoColumnTextFirst,
            "twoColumnContentSecond": data.twoColumnTextSecond,
            "oneColumnContent": data.oneColumnContent,
            "address": data.address,
            "author": data.author,
            "hider": data.hider
        }
        const response = await authAxios.post('/articles', payload)
        return response.data
    }

    async getOneArticle(id) {
        const response = await axios.get('/articles/' + id)
        this.selectedArticle = response.data
    }

    async removeArticle(id) {
        const response = await authAxios.delete('/articles', {data: {id}})
        return response.data
    }
}

export default new ArticlesStore()