import { request, errorMap } from '../utils/request'

export function requestUserInfo ({ user_id }) {
    if( !user_id ) {
        return Promise.reject(errorMap(-1))
    }

    return request(
        '//xxx.cn'
    )
}