<!--
 * @Description: 二级路由挂载点页面
 * @Autor: 执手天涯
 * @Date: 2022-03-22 16:29:24
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-22 17:18:54
-->

<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed border />
    <!-- 二级路由挂载点 -->
    <div class="main">
      <router-view></router-view>
    </div>
    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/layout/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  // 数据对象
  data() {
    return {
      // 当前路由选中的对应的额外信息
      activeTitle: this.$route.meta.title,
    };
  },
  //侦听器
  watch: {
    //   侦听路由的变化改变对应标题的信息
    $route() {
      this.activeTitle = this.$route.meta.title;
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  padding: 46px 0px 50px 0px;
}
</style>