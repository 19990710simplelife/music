<!--
 * @Description: 一级路由下的首页
 * @Autor: 执手天涯
 * @Date: 2022-03-22 16:29:31
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-23 19:56:56
-->

<template>
  <div>
    <!-- 推荐音乐 -->
    <p class="title">推荐音乐</p>
    <van-row gutter="6">
      <van-col span="8" v-for="item in recommendMusicList" :key="item.id">
        <van-image width="100%" height="3rem" fit="cover" :src="item.picUrl" />
        <p class="song_name">{{ item.name }}</p>
      </van-col>
    </van-row>
    <!-- 最新音乐 -->
    <p class="title">最新音乐</p>
    <SongItems
      v-for="item in newMusicList"
      :key="item.id"
      :name="item.name"
      :author="item.song.artists[0].name"
      :id="item.id"
    ></SongItems>
  </div>
</template>

<script>
// 导入API
import { recommendMusicAPI, newMusicAPI } from "@/api/index.js";
import SongItems from "@/components/SongItems";
export default {
  data() {
    return {
      //推荐音乐列表
      recommendMusicList: [],
      // 最新音乐列表
      newMusicList: [],
    };
  },

  /**
   * 生命周期函数created中请求数据
   */
  async created() {
    /**
     * 获取推荐音乐
     */
    const recommendMusic = await recommendMusicAPI({
      limit: 6,
    });
    this.recommendMusicList = recommendMusic.data.result;

    /**
     * 获取最新音乐
     */
    const newMusic = await newMusicAPI({
      limit: 20,
    });
    this.newMusicList = newMusic.data.result;
  },

  components: {
    SongItems,
  },
};
</script>

<style lang="less" scoped>
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: rgb(0, 0, 0);
  font-size: 15px;
}
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>