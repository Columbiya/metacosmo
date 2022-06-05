import { makeAutoObservable } from 'mobx';
import { authAxios } from '../http/http';
import { axios } from './../http/http';

class AuthStore {
    _isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    get isAuth() {
        return this._isAuth
    }

    set isAuth(value) {
        this._isAuth = value
    }

    async checkAuth() {
        try {
            await authAxios.get('/auth/check')
            this.isAuth = true
        } catch(e) {
            this.isAuth = false
            console.log(e)
        }
    }

    async login(username, password) {
        try {
            const { data } = await axios.post('/auth/login', {username, password})
            console.log(data)
            localStorage.setItem('token', data.token)
            this.isAuth = true
        } catch(e) {
            console.log(e)
        }
    }
}

export default new AuthStore()