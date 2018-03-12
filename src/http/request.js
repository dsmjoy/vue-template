
import axios from 'axios'
import Qs from 'qs'


axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? 'http://app.domain.com/' : 'http://app.domain.com.cn/'
axios.defaults.transformRequest = [
    function (data) {
        return Qs.stringify(data)
    }
]

export default function request (options) {
    return new Promise((resolve, reject) => {
        axios(options)
            .then(({data}) => {
                if( data.code > 10000 ) {
                    reject(data.msg)
                    return
                }

                resolve(data)
            })
    })
}