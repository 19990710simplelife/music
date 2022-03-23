/*
 * @Description: 管理所有的网络请求，默认导出
 * @Autor: 执手天涯
 * @Date: 2022-03-22 17:23:37
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-23 19:58:33
 */
import {
    recommendMusic,
    newdMusic,
} from './home'

import {
    hotkeys,
    searchResult
} from './search'

import {
    getSongById,
    getLyricById
} from './Play'
export const recommendMusicAPI = recommendMusic
export const newMusicAPI = newdMusic

export const hotkeysAPI = hotkeys
export const searchResultAPI = searchResult

export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据