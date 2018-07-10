import axios from './axios'
import vbus from '@/services/vbus/vbus'

export function errorMap (code, extra) {
    let errorData = {
        code: code,
        extra: extra
    },
    msg = ''
    
    switch (code) {
        case -1: 
            msg = '参数不足'
            break
        case -2: 
            msg = '参数类型错误'
            break
    }

    errorData.message = msg

    return errorData
}

export function request(url, options = {}, notice = {}) {

    const defaultOptions = {
        method: 'GET'
    }

    let newOptions = { url: url, ...defaultOptions, ...options }
    newOptions.method = newOptions.method.toUpperCase()

    notice.loading && vbus.$emit('$loading.show', {text: notice.loadingText})
    return new Promise((resolve, reject) => {
        axios(newOptions)
            .then(({ data, status }) => {
                notice.loading && vbus.$emit('$loading.hide')
                // 非200码, 在此统一处理. 同时reject这个接口,业务层捕获这个错误, 做特殊处理
                // 所以业务层捕获的都是业务错误
                const code = data.code

                switch (code) {
                    case 200:
                        resolve(data.data || {code: code})
                        break
                    case 301: 
                        // 重新授权
                        vbus.$emit('$toast.show', {text: '授权已过期'})
                        return
                    default:
                        reject(data)
                }

                notice.toast && vbus.$emit('$toast.show', {text: notice.toastText})
            })
            // 接口报错, 在此处理, 不reject到业务层
            .catch(err => {
                notice.loading && vbus.$emit('$loading.hide')
                vbus.$emit('$toast.show', {
                    text: 'aoh, 出错了'
                })
            })
    })
}


export default request