// 个人中心
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 微信登录
export const userLogin = (ajaxParams) => wxRequest(API_PATH + '/auth/login', ajaxParams, 'GET')

//banner
export const apiIndexBanner = (ajaxParams) => wxRequest(API_PATH + '/banner/list/5', ajaxParams, 'GET')

//保存个人信息
export const apiSaveInfo = (ajaxParams) => wxRequest(API_PATH + '/auth/save', ajaxParams, 'POST')

//首页病种列表
export const apiTypeList = (ajaxParams) => wxRequest(API_PATH + '/specy/list/20', ajaxParams, 'GET')

//病种明细
export const apiTypeDetail = (ajaxParams) => wxRequest(API_PATH + `/specy/show/${ajaxParams.id}`, ajaxParams, 'GET')

//医生列表
export const apiDoctorList = (ajaxParams) => wxRequest(API_PATH + '/doctor/list/100', ajaxParams, 'GET')

//医生详情
export const apiDoctorDetail = (ajaxParams) => wxRequest(API_PATH + `/doctor/show/${ajaxParams.id}`, ajaxParams, 'GET')

//我的订单
export const apiOrderList = (ajaxParams) => wxRequest(API_PATH + '/order/list/100', ajaxParams, 'GET')

//心电检查
export const apiPayCheck = (ajaxParams) => wxRequest(API_PATH + '/order/pay-check', ajaxParams, 'POST')

//住院订单
export const apiPayApm = (ajaxParams) => wxRequest(API_PATH + '/order/pay-apm', ajaxParams, 'POST')

//报告列表
export const apiReportList = (ajaxParams) => wxRequest(API_PATH + '/report/list/100', ajaxParams, 'GET')

//查看个人报告
export const apiReportDetail = (ajaxParams) => wxRequest(API_PATH + `/report/show/${ajaxParams.id}`, ajaxParams, 'GET')
