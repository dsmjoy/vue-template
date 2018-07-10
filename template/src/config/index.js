
import { platformDetector } from '../utils'

// 环境变量
export const HOST_PLATFORM = platformDetector()
export const APP_RUN_ENV = process.env.NODE_ENV

// url变量
export const API_BASE_URL = APP_RUN_ENV == 'development' ? 'xxx' : 'xxx'
export const API_OTHER_BASE_URL = APP_RUN_ENV == 'development' ? 'xxx' : 'xxx'

// 开关
const MOCK_API_OPEN = false
export const USE_MOCK_API = process.env.NODE_ENV === 'prod' ? false : MOCK_API_OPEN