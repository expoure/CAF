import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'https://api.dev.combateafraude.com.'
})

api.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  return config
})

export { api, AxiosRequestConfig }
