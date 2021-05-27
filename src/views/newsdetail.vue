<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="新闻详情" value="当前位置：新闻详情"  :border="false" />
    </van-cell-group>
    <img :src="imgurl" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>{{title}}</h4>
      <p v-html="content"></p>
    </div>
  </div>
</template>
<script>
import { newsdetailapi } from "@/api/api.js";
import {fujian} from '@/utils/all.js'

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
      this.content = fujian(res.data.content);

      this.imgurl =
        "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
        res.data.imgguid.slice(0,res.data.imgguid.length-1);
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
  margin-top: 20px;
  padding: 10px;
}
</style>