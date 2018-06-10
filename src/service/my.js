// 个人中心
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 用户信息
export const CUSTOMER_INFO = (ajaxParams) => wxRequest(API_PATH + '/wxapp/customer/info', ajaxParams, 'POST')
