import { request, errorMap } from '../request/request'

export function requestUserInfo ({ user_id }) {
    if( !user_id ) {
        return Promise.reject(errorMap(-1))
    }

    return request(
        '//xxx.cn'
    )
}