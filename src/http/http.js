import Axios from 'axios'
import { API_URL, PANCAKE_API_URL } from '../consts'

export const axios = Axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
    }
})

export const pancakeAxios = Axios.create({
    baseURL: PANCAKE_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})

export const authAxios = Axios.create({
    baseURL: API_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})