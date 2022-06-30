import axios from "axios"
const BASE_URL = 'https://clickspaceonlineshopwebapi20220629161408.azurewebsites.net'

export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{'Content-Type':'application/json'},
    withCredentials: true
})