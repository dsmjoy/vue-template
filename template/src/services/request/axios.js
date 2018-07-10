import axios from 'axios'
import Qs from 'qs'
import { API_BASE_URL } from '@/config/index'

let axiosInstance = {}
const AXIOS_DEFAULT_CONFIG = {
    timeout: 20000,
    headers: {},
    baseURL: API_BASE_URL,
    transformRequest: [
        function (data) {
            return Qs.stringify(data)
        }
    ]
}

axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

// 注入请求拦截
axiosInstance
    .interceptors.request.use(requestSuccessFunc, requestFailFunc)
// 注入失败拦截
axiosInstance
    .interceptors.response.use(responseSuccessFunc, responseFailFunc)

// 拦截器(钩子)
function requestSuccessFunc (config) {
    return config
}
function requestFailFunc (error) {
    return Promise.reject(error)
}
function responseSuccessFunc (response) {
    return response
}
function responseFailFunc (error) {
    return Promise.reject(error)
}

export default axiosInstance