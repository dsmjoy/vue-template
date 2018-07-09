
import { platformDetector } from '../utils'

export const HOST_PLATFORM = platformDetector()
export const APP_RUN_ENV = process.env.NODE_ENV

export const API_BASE_URL = APP_RUN_ENV == 'development' ? 'xxx' : 'xxx'
export const API_OTHER_BASE_URL = APP_RUN_ENV == 'development' ? 'xxx' : 'xxx'