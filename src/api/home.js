/*
 * @Description: 首页相关数据的请求
 * @Autor: 执手天涯
 * @Date: 2022-03-22 17:24:29
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-22 19:58:52
 */
// 导入封装好的网络请求方法
import request from '@/utils/request'

/**
 * 用于获取首页的推荐音乐的请求
 * @param {外界传入的参数} params 
 * @returns 
 */
export const recommendMusic = params => request({
    url: "/personalized",
    params
})

/**
 * 用户获取最新歌曲
 * @param {外界传递的参数} params 
 * @returns 
 */
export const newdMusic = params => request({
    url: "/personalized/newsong",
    params
})