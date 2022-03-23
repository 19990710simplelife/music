
<template>
  <div>
    <van-search
      shape="round"
      v-model="searchkey"
      placeholder="请输入搜索关键词"
      @input="inputSearch"
    />
    <!-- 搜索下容器 -->
    <div class="search_wrap" v-if="searchList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <span
          class="hot_item"
          v-for="(item, index) in hotkeysList"
          :key="index"
          @click="searchHotkey(item.first)"
          >{{ item.first }}</span
        >
      </div>
    </div>

    <!-- 搜索列表 -->

    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItems
          v-for="item in searchList"
          :key="item.id"
          :name="item.name"
          :author="item.ar[0].name"
          :id="item.id"
        ></SongItems>
      </van-list>
    </div>
  </div>
</template>

<script>
// 导入API
import { hotkeysAPI, searchResultAPI } from "@/api/index.js";
import SongItems from "@/components/SongItems";
export default {
  // 数据对象
  data() {
    return {
      // 搜索关键字
      searchkey: "",
      // 热门搜索关键字列表
      hotkeysList: [],
      // 搜索结果
      searchList: [],
      // 定义一个定时器，来防止输入框防抖
      timer: null,
      loading: false,
      finished: false,
      page: 1,
    };
  },

  methods: {
    /**
     * 点击热搜关键字，将其填入到搜索框
     */
    async searchHotkey(keys) {
      // 开启触底加载
      this.finished = false;
      this.searchkey = keys;
      const hotkeySongs = await this.searchSongs();
      this.searchList = hotkeySongs.data.result.songs;
    },

    /**
     * 获取搜索数据
     */
    async searchSongs() {
      return await searchResultAPI({
        limit: 20,
        keywords: this.searchkey,
        offset: (this.page - 1) * 20,
      });
    },

    /**
     * 输入框中的数据变化的时候，获取搜索结果
     */
    async inputSearch() {
      // 有定时器就清空该定时器
      if (this.timer) clearTimeout(this.timer);
      // 开启新的定时器
      this.timer = setTimeout(async () => {
        this.page = 1;
        //开启触底加载
        this.finished = false;
        // 判断输入框的内容是否为空
        if (this.searchkey.trim().length === 0) {
          // 清空搜索列表
          this.searchList = [];
          return;
        }
        const inputSearchSongs = await this.searchSongs();
        // 判断搜索的歌曲是否存在
        if (inputSearchSongs.data.result.songs === undefined) {
          // 如果不存在清空当前的数据列表，并返回
          this.searchList = [];
          return;
        }

        this.searchList = inputSearchSongs.data.result.songs;
      }, 700);
    },

    /**
     * 加载下一页数据
     */
    async onLoad() {
      this.page++;
      const newSongs = await this.searchSongs();
      //没有更对数据
      if (newSongs.data.result.songs === undefined) {
        this.finished = true; //禁止触底加载
        return;
      }
      this.searchList = [...this.searchList, ...newSongs.data.result.songs];
      //修改加载为fasle，确保下次的加载可以执行
      this.loading = false;
    },
  },

  // created生命周期函数中获取数据
  async created() {
    const hotkeys = await hotkeysAPI();
    this.hotkeysList = hotkeys.data.result.hots;
  },

  components: {
    SongItems,
  },
};
</script>

<style lang="less" scoped>
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}

/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>