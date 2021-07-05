import axios, { AxiosResponse } from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

axios.defaults.baseURL = publicRuntimeConfig.apiBaseUrl

axios.interceptors.request.use(
  (request) => {
    // Edit request config
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

const httpMethods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
}

export const apiClient = axios.request

export type ResponseType = AxiosResponse

export default httpMethods
