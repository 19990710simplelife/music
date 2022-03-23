/*
 * @Description: 路由对象文件
 * @Autor: 执手天涯
 * @Date: 2022-03-22 16:31:45
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-22 17:19:49
 */

// 导入vue实例对象
import Vue from "vue";
// 导入vue-router
import VueRouter from "vue-router";
// 全局注册vue-router
Vue.use(VueRouter);
// 导入路由对应的组件
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Search from '@/views/Search/index.vue'
import Play from '@/views/Play/index.vue'
// 定义路由匹配规则
const routes = [{
        // 检测访问是主页的时候重定向到layout页面
        path: '/',
        redirect: '/layout'
    },
    {
        // 访问layout页面的时候默认重定向到子路由的首页
        path: '/layout',
        component: Layout,
        redirect: '/layout/home',
        children: [{
                path: 'home',
                component: Home,
                // meta属性是用配置路由对象的额外信息的
                meta: {
                    title: "首页"
                }
            },
            {
                path: 'search',
                component: Search,
                meta: {
                    title: "搜索"
                }
            }
        ]
    }, {
        path: '/play',
        component: Play
    }
]
// 利用路由规则生成路由对象
const router = new VueRouter({
    routes: routes
})

// 默认导出路由对象
export default router