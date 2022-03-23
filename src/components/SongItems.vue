<!--
 * @Description: 封装搜索结果页面
 * @Autor: 执手天涯
 * @Date: 2022-03-23 19:48:36
 * @LastEditors: 执手天涯
 * @LastEditTime: 2022-03-23 20:01:08
-->
<template>
  <div>
    <van-cell center :title="name" :key="id" :label="name + ' - ' + author">
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" @click="PlayFn" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    author: String,
    id: Number,
  },

  methods: {
    PlayFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style>
</style>