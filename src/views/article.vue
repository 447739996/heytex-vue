<template>
  <div style="width: 100%">
    <img :src="data.imgguid" alt style="width:90%;margin-top:50px" />
    <div class="fuwenben">
      <h3>{{data.title}}</h3>
      <div class="" v-html="data.content"></div>
    </div>

    <div v-show="list1.length==0?false:true">
      <van-divider contentPosition="center">文章列表</van-divider>
       <van-grid direction="horizontal" column-num="2">
        <div
          icon="photo-o"
          text="文字"
          v-for="(item1,index1) in list1"
          :key="index1"
          class="recomentlist"
          @click="toarticle(item1.articleguid)"
        >
        <img :src="item1.imgguid" alt="" class="listimg">
          <h4 class="listtitle">{{item1.catalogname}}</h4>
          <p class="listsubtitle">{{item1.articletitle}}</p>
          <p class="listoperatetime">{{item1.operatetime}}</p>
        </div>
      </van-grid>
    </div>
    <div>
      <van-divider contentPosition="center">推荐</van-divider>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in list" :key="index" @click="toarticle(item.rowguid)">
          <img :src="item.imgguid" alt class="listimg1" />
          <h4 class="listtitle">{{item.title}}</h4>
          <!-- <p class="listsubtitle">{{item.subtitle}}</p> -->
          <!-- <p class="listoperatetime">{{item.operatetime}}</p> -->
        </van-swipe-item>
      </van-swipe>
      <!-- <van-grid direction="horizontal" column-num="2">
        <div
          icon="photo-o"
          text="文字"
          v-for="(item,index) in list"
          :key="index"
          class="recomentlist"
          @click="toarticle(item.rowguid)"
        >
        <img :src="item.imgguid" alt="" class="listimg">
          <h4 class="listtitle">{{item.title}}</h4>
          <p class="listsubtitle">{{item.subtitle}}</p>
          <p class="listoperatetime">{{item.operatetime}}</p>
        </div>
      </van-grid>-->
    </div>
  </div>
</template>
<script>
import {fujian} from '@/utils/all.js'

import { articleapi, homearticleapi,childrenarticleapi } from "@/api/api.js";
export default {
  data() {
    return {
      imgurl: "",
      title: "",
      content: "",
      data: {},
      list: [],
      showlist1:true,
      list1:[]
    };
  },
  created() {
    var queryarr = location.href.split("-");
    console.log(queryarr[2])
    childrenarticleapi(queryarr[2]).then(res=>{
      console.log(res)
        this.list1=res.data
         for (var i = 0; i < this.list1.length; i++) {
        this.list1[i].imgguid =
          "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
          this.list1[i].imgguid.slice(0, this.list1[i].imgguid.length - 1);
      }
    })
    articleapi(queryarr[1]).then(res => {
      this.data = res.data;
      this.data.content=fujian(this.data.content)
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

      for (var i = 0; i < this.list.length; i++) {
        this.list[i].imgguid =
          "http://10.167.0.12:7001/api/basic/accessoryinfo/image?rowguid=" +
          this.list[i].imgguid.slice(0, this.list[i].imgguid.length - 1);
      }
      console.log(this.list);
    });
  },
  methods: {
    toarticle(e) {
      // window.location.href = "article?-" + e;
      this.$router.push('article?-'+e)
      this.$router.go(0);

    }
  }
};
</script>
<style  scoped>
.listtitle,
.listsubtitle,
.listoperatetime {
  width: 100%;
  display: block;
}
.fuwenben {
  width: 90%;
  margin-left: 5%;
  text-align: left;
}

.recomentlist {
  text-align: center;
  width: 40%;
  margin-left: 5%;
  margin-top: 10px;
  border: 1px solid rgb(240, 238, 238);
}
.listimg {
  width: 95%;
  margin-left: 2.5%;
  margin-top: 5px;
  height: 100px;
}
.listimg1{
  width: 50%;
}
</style>
