<template>
  <div class="about">
    <van-cell-group>
      <van-cell title="招聘" value="当前位置：HEYTEX/招聘" :border="false" />
    </van-cell-group>
    <img src="../static/banner1.jpg" alt style="width:90%;margin-top:50px" />
    <div class="content">
      <h4>和我們一樣多樣化</h4>
      <p>由於員工的知識對於我們的全球成功至關重要，因此我們希望從一開始就對其進行推廣，並在幾乎所有工作領域提供學徒和專業職業。沒有人一個人呆著。我們經驗豐富的員工與年輕的專業人員緊密合作，並希望與他們分享經驗。</p>
    </div>
    <div class="fuwenben">
      <van-tabs active="1">
        <van-tab :title="item.name" :name="index" v-for="(item,index) in list" :key="index">
           <div v-html='item.content'></div>
            
            </van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <h5>我們期待與您會面！</h5>
      <p>請將您的申請郵寄至jobs@heytex.de（最好是一個pdf文件，最大數據大小為5MB）或使用我們的 申請表。</p>
    </div>
  </div>
</template>
<script>
import { jobinfoapi } from "@/api/api.js";

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
      this.list=res.data
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
.fuwenben{
    width: 90%;
    margin-left: 5%;
    text-align: left;
}
</style>