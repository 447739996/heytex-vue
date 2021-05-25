<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="title" value="时间" label="描述信息" :border="false" />
    </van-cell-group>
    <img :src="imgurl" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>{{title}}</h4>
      <p v-html="content"></p>
      <p>{{imgurl}}</p>
    </div>
  </div>
</template>
<script>
import { newsdetailapi } from "@/api/api.js";

export default {
  data() {
    return {
      title: "",
      content: "",
      imgurl: "",
      imgurl1: ""
    };
  },
  beforeCreate() {
    var queryarr = location.href.split("?");
    newsdetailapi(queryarr[1]).then(res => {
      this.title = res.data.title;
      this.content = res.data.content;
      this.imgurl =
        "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
        res.data.imgguid;
    });
  },
  created() {
    console.log(this.imgurl);
  }
};
</script>
<style scoped>
.content {
  width: 90%;
  margin-left: 5%;
  border: 1px solid rgb(184, 184, 184);
  margin-top: 20px;
}
</style>