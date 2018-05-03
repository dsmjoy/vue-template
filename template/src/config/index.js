import Vue from 'vue'
import { wechatDetection } from '@/utils/index'

Vue.prototype._$APP_NAME = 'vue-template'
Vue.prototype._$IS_WECHAT = wechatDetection()