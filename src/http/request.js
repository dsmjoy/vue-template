
import axios from 'axios'
import Qs from 'qs'


axios.defaults.baseURL = 'http://app.domain.com/'
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
                    reject(data)
                    return
                }

                resolve(data)
            })
    })
}