import { makeAutoObservable } from 'mobx';
import { pancakeAxios } from '../http/http';

class TokensStore {
    constructor() {
        makeAutoObservable(this)
    }

    async fetchToken(address) {
        try {
            const response = await pancakeAxios.get('/tokens/' + address)
            const data = response.data
            return data
        } catch(e) {
            console.log(e)
        }
    }
}

export default new TokensStore()