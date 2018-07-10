import axios from 'axios'
import Qs from 'qs'

axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//xxx.com.cn' : '//xxx.cn'
axios.defaults.transformRequest = [
    function (data) {
        return Qs.stringify(data)
    }
]
