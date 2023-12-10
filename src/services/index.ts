import axios from 'axios'

const BASE_URL = 'http://localhost:5003'
const $axios = axios.create({
  baseURL: BASE_URL
})

export default $axios