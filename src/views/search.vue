<template>
  <div class="about">
    <h4>搜索结果</h4>
    <van-card
      :desc="item.operatetime"
      :title="item.name"
      :thumb="item.img"
      v-for="(item,index) in list"
      :key="index"
    />
  </div>
</template>
<script>
import { searchapi } from "@/api/api.js";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    console.log(location.href);
    var queryarr = location.href.split("?");
    console.log(queryarr[1]);
    searchapi(queryarr[1]).then(res => {
      console.log(res);
      this.list = res.data;
    });
  }
};
</script>
<style scoped>
</style>