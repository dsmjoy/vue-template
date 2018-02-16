
const DOMAIN = process.env.NODE_ENV == 'development' ? 'http://pay.xxx.com.cn' : 'http://pay.xxx.com'

export const PRE_PAY = DOMAIN + 'api/pay/pre'