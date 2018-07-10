import axios from 'axios'

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

export function request(url, options) {

    const defaultOptions = {
        method: 'GET'
    }

    let newOptions = { url: url, ...defaultOptions, ...options }
    newOptions.method = newOptions.method.toUpperCase()
    return new Promise((resolve, reject) => {
        axios(newOptions)
            .then(({ data, status }) => {
                // 非200码, 在此统一处理. 同时reject这个接口,业务层捕获这个错误, 做特殊处理
                // 所以业务层捕获的都是业务错误
                if (data.code != 200) {
                    reject(data)
                    return
                }

                resolve(data.data || {code: data.code})
            })
            // 接口报错, 在此处理, 不reject到业务层
            .catch(err => {

            })
    })
}


export default request