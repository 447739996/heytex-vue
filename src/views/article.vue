<template>
  <div style="width: 100%">
    <img :src="data.imgguid" alt style="width:90%;margin-top:50px" />
    <div class="fuwenben">
      <h3>{{data.title}}</h3>
      <div class="fuwenben" v-html="data.content"></div>
    </div>
    <div>
      <van-divider contentPosition="center">推荐</van-divider>
      <van-grid direction="horizontal" column-num="2">
        <van-grid-item icon="photo-o" text="文字" v-for="(item,index) in list" :key="index">
            <h4 class="listtitle">{{item.title}}</h4>
            <p class="listsubtitle">{{item.subtitle}}</p>
            <p class="listoperatetime">{{item.operatetime}}</p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import { articleapi, homearticleapi } from "@/api/api.js";
export default {
  data() {
    return {
      imgurl: "",
      title: "",
      content: "",
      data: {},
      list: []
    };
  },
  created() {
    var queryarr = location.href.split("?");
    articleapi(queryarr[1]).then(res => {
      this.data = res.data;
      this.data.imgguid = this.data.imgguid.slice(
        0,
        this.data.imgguid.length - 1
      );
      this.data.imgguid =
        "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
        this.data.imgguid;
      console.log(this.data.rowguid);
      //   this.data.imgguid =
      // "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
      // this.data.rowguid;
      console.log(this.data.imgguid);
    });
    homearticleapi().then(res => {
      this.list = res.data;
    });
  }
};
</script>
<style  scoped>
.listtitle,.listsubtitle,.listoperatetime{
width: 100%;
display: block;
}
.fuwenben{
  width: 90%;
  margin-left: 5%;
  text-align: left;
}
</style>
