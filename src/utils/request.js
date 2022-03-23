/*
 * @Description: 用于封装一个网络请求，专门负责获取数据的方法
 * @Autor: 执手天涯
 * @Date: 2022-03-22 17:09:05
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-22 17:23:07
 */
// 导入axios
import axios from "axios";
// 设置请求的根路径
axios.defaults.baseURL = "http://localhost:9000"
// 默认导出
export default axios