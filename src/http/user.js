
const DOMAIN = process.env.NODE_ENV == 'development' ? 'http://user.xxx.com.cn' : 'http://user.xxx.com'

/**
 *  @desc 获取用户信息
 *  @method get
 */
export const USER_INFO = DOMAIN + '/api/user'