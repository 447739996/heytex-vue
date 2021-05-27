<template>
  <div class="about">
    <h4>搜索结果</h4>
    <van-card
      :desc="item.subtitle"
      :title="item.title"
      :thumb="item.imgguid"
      v-for="(item,index) in list"
      :key="index"
      centered
      @click="toarticle(item.cataloginfoguid,item.rowguid)"
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
      this.list = res.data.items;
      for (var i = 0; i < this.list.length; i++) {
        this.list[i].imgguid =
          "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
          this.list[i].imgguid.slice(0, this.list[i].imgguid.length - 1);
      }
    });
  },
  methods: {
    toarticle(id, url) {
      if (id == "" || id == undefined) {
        this.$router.push("/news?" + url);
      } else {
        this.$router.push("/article?" + url);
      }
    }
  }
};
</script>
<style scoped>
</style>