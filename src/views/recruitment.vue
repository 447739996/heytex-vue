<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="招聘" value="当前位置：HEYTEX/招聘" :border="false" />
    </van-cell-group>
    <img src="../static/zp.png" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>海德思，与您共创未来！</h4>
      <p>
        海德思集团目前在全球三大洲设有四家工厂，约有400名员工。
        海德思集团全球业务活动成功的基础，是每一位海德思员工。每个员工都是我们集团的一部分；公司使命、愿景和价值观的实现源自每一位海德思员工的努力工作。海德思百年品牌的经营，离不开每一个海德思员工的奉献。
        海德思集团为员工提供良好的工作环境、有竞争力的薪资、多通道职业发展；旨在与员工共创美好未来。
        未来有无限可能，加入海德思，让我们一起创造未来！
      </p>
    </div>
    <div class="fuwenben content">
      <van-tabs active="1" swipe-threshold="3" title-active-color="#526E77" color="#526E77">
        <van-tab
          :title="item.name"
          :name="index"
          v-for="(item,index) in list"
          :key="index"
          class="fuwenbent"
        >
          <div v-html="item.content" class="fuwenbenc"></div>
        </van-tab>
      </van-tabs>
      <!-- <van-tabs>
        <van-tab v-for="(item,index) in 6" :title="'24215215125'+item" :key="index">内容 {{ index }}</van-tab>
      </van-tabs>-->
    </div>
    <!-- <div class="content">
      <h5>我們期待與您會面！</h5>
      <p>請將您的申請郵寄至jobs@heytex.de（最好是一個pdf文件，最大數據大小為5MB）或使用我們的 申請表。</p>
    </div>-->
  </div>
</template>
<script>
import { jobinfoapi } from "@/api/api.js";
import { fujian } from "@/utils/all.js";

export default {
  data() {
    return {
      activeNames: [],
      list: [{ name: 2231 }, { name: 2231231 }]
    };
  },
  created() {
    jobinfoapi().then(res => {
      console.log(res);
      this.list = res.data;
      for(var i=0;i<this.list.length;i++){
        this.list[i].content=fujian( this.list[i].content)
      }
    });
  }
};
</script>
<style scoped>
.content {
  width: 90%;
  margin-left: 5%;
  border: 1px solid rgb(184, 184, 184);
  margin-top: 20px;
  /* overflow: scroll; */
}
.fuwenben {
  width: 90%;
  margin-left: 5%;
  text-align: left;
}
.fuwenbenc {
  margin: 20px;
}
.about{
  padding-bottom: 20px;
}
</style>
