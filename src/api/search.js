/*
 * @Description: 这是搜索页面请求数据的方法
 * @Autor: 执手天涯
 * @Date: 2022-03-22 19:49:28
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-22 20:25:58
 */
// 导入封装好的网络请求方法
import request from '@/utils/request'

/**
 * 用于获取热搜关键字
 * @returns 
 */
export const hotkeys = () => request({
    url: '/search/hot',
})

/**
 * 热搜结果
 * @param {外界传递的参数}} params 
 * @returns 
 */
export const searchResult = params => request({
    url: '/cloudsearch',
    params
})